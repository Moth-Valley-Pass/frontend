<template>
  <v-container fill-height fluid text-xs-center>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="6">
        <v-card
          align="center"
          class="mt-5 pa-5"
          elevation="0"
          style="text-align: center; margin: auto"
        >
          <v-btn
            large
            class="green ma-3 white--text rounded-lg"
            text
            @click="metamaskButtonClicked()"
          >
            <span style="font-weight: bold">{{ walletBtnText }}</span>
          </v-btn>

          <div
            v-if="showNonMainnetWarning"
            class="text-h5 pa-1 red--text text-center"
          >
            <strong>Warning!</strong> You are not connected to the
            {{ networkName }} network
          </div>

          <div v-if="signer != null" class="divider"></div>
        </v-card>

        <v-card
          v-if="
            !isLoading &&
            signer &&
            !isLoadingTransactionReceipt &&
            !timerCount.isFinished
          "
          class="mt-5 mb-5 pa-5"
          elevation="0"
        >
          <h3 class="mb-3">Bid on a city</h3>

          <v-row>
            <v-col cols="12" md="2">
              <v-text-field
                v-model="tokenID"
                label="Token ID"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="bidAmount"
                :disabled="bidAmountDisabled"
                label="Bid Amount (CANTO)"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn
                large
                text
                class="green ma-3 white--text rounded-lg"
                @click="
                  errorText = ''
                  checkBidValid()
                "
              >
                <strong> PLACE BID</strong>
              </v-btn>
            </v-col>

            <div class="ma-3" v-if="minBid">
              <img
                style="max-width: 500px; max-height: 500px"
                :src="`https://cities.yoniishappy.com/images/cities/${tokenID}.jpg`"
              />
            </div>

            <v-card-text v-if="lastBid" class="grey--text"
              >Last Bid: {{ lastBid / 1000000000000000000 }} CANTO</v-card-text
            >

            <v-card-text v-if="pendingWinner" class="grey--text"
              >Pending Winner: {{ pendingWinner }}</v-card-text
            >

            <v-card-text v-if="minBidStep" class="grey--text"
              >Minimum bidding step:
              {{ minBidStep / 1000000000000000000 }} CANTO</v-card-text
            >

            <v-card-text v-if="minBid" class="grey--text"
              >Minimum Bid:
              {{ minBid / 1000000000000000000 }} CANTO</v-card-text
            >
          </v-row>
        </v-card>

        <v-card
          style="text-align: center"
          class="mt-5 mb-5 pa-5"
          v-if="ownedNFTs.length > 0"
          elevation="0"
        >
          <v-card-title>Your Cities</v-card-title>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="nft in ownedNFTs"
                :key="nft.name + nft.tokenID"
                cols="6"
              >
                <v-card>
                  <v-img :src="nft.image" class="white--text align-end">
                    <v-card-title v-text="nft.name"></v-card-title>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <v-card
          v-if="!isLoading"
          style="text-align: center"
          class="mt-5 mb-5 white--text"
        >
        </v-card>

        <v-card v-if="txHash" class="pa-5">
          <p style="text-align: center" class="mt-5 green--text">
            View transaction on
            <span style="font-weight: bold"
              ><a target="_blank" :href="`${explorerURI}/tx/${txHash}`"
                ><span class="black--text">Etherscan</span></a
              ></span
            >
          </p>
        </v-card>

        <v-card
          style="text-align: center"
          class="red pa-1"
          v-if="boxError && errorText"
          elevation="0"
        >
          <v-card-text class="white--text">{{ errorText }}</v-card-text>
        </v-card>

        <v-card
          style="text-align: center"
          class="pa-5 mt-5"
          v-if="isLoading"
          elevation="0"
        >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
          <p class="body-2 ma-3 grey--text">{{ loadingText }}</p>
        </v-card>

        <v-card
          style="text-align: center"
          class="pa-5"
          v-if="isLoadingTransactionReceipt"
          elevation="0"
        >
          <v-progress-circular
            indeterminate
            color="green"
          ></v-progress-circular>
          <p class="body-3 ma-3 gray--text">{{ loadingText }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogPlaceBid" class="ma-5 pa-5" max-width="600px">
      <v-card class="pa-5">
        <div v-if="this.currentBid == 0">
          <v-card-text>Be the first to bid on this city!</v-card-text>
          <v-card-text
            >Minimum Bid Amount
            {{ minBidStep / 1000000000000000000 }} CANTO</v-card-text
          >
        </div>

        <div v-if="this.currentBid != 0">
          <v-card-text
            >Current Bid:
            {{ this.currentBid / 1000000000000000000 }} CANTO</v-card-text
          >
          <v-card-text>Pending Winner: {{ this.currentWinner }}</v-card-text>
        </div>

        <v-btn
          large
          text
          class="green ma-3 white--text rounded-lg"
          @click="
            errorText = ''
            placeBid()
          "
        >
          <strong> CONFIRM PLACE BID</strong>
        </v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogError" class="ma-5 pa-5" max-width="600px">
      <v-card class="warning white--text rounded-lg">
        <v-card-title>
          <span>{{ errorText }}</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="white"
            text
            @click="
              dialogError = false
              errorText = ''
            "
          >
            EXIT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ethers, providers } from 'ethers'

import {
  CONTRACT_ADDR,
  RPC_PROVIDER,
  NETWORK_ID,
  NETWORK_NAME,
  EXPLORER_URI,
} from '../constants'
import { CONTRACT_ABI } from '../contract_abi'

export default {
  auth: false,
  components: {},
  data() {
    return {
      tokenID: null,
      bidAmount: null,
      dialogPlaceBid: false,
      auctionEndTime: null,
      isLoading: false,
      showNonMainnetWarning: false,
      walletBtnText: 'CONNECT WALLET',
      isLoadingTransactionReceipt: false,
      contract: null,
      loadingText: 'loading...',
      account: null,
      txHash: null,
      ethers: null,
      signer: null,
      bidAmountDisabled: true,
      errorText: '',
      mintBtnText: 'MINT A SONG',
      boxError: false,
      minBidStep: null,
      pendingWinner: null,
      dialogError: false,
      explorerURI: EXPLORER_URI,
      networkName: NETWORK_NAME,
      networkID: NETWORK_ID,
      currentBid: null,
      ownedNFTs: [],
      lastBid: null,
      minBid: null,
      tokensOfOwner: null,
      currentWinner: null,
      timerCount: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        isLoaded: false,
        isFinished: false,
      },
    }
  },

  async mounted() {
    this.isLoading = true
    this.loadingText = 'Retrieving smart contract state'
    this.provider = 'not_web3'
    this.ethers = new ethers.providers.JsonRpcProvider(RPC_PROVIDER, NETWORK_ID)
    this.contract = new ethers.Contract(
      CONTRACT_ADDR,
      CONTRACT_ABI,
      this.ethers
    )

    //get the price per NFT
    this.auctionEndTime = Number(await this.contract.auctionEnd())
    console.log('auctionEndTime: ' + this.auctionEndTime)

    this.minBidStep = Number(await this.contract.minBidStep())
    //you can also retrive here the whitellist start time, public start time etc. etc.
    this.isLoading = false
  },
  methods: {
    async checkBidValid() {
      if (!this.tokenID) {
        this.errorText =
          'Please enter the token ID coresponding to the city you would like to bid on'
        this.dialogError = true
        return
      }
      if (!this.bidAmount) {
        this.errorText = 'Please enter the bid amount'
        this.dialogError = true
        return
      }

      //get minimum bid for the token
      this.currentBid = Number(
        await this.contract.highestBid(Number(this.tokenID))
      )

      console.log('bid amount: ' + Number(this.bidAmount * 1000000000000000000))
      console.log(
        'minBidStep: ' + Number(this.minBidStep * 1000000000000000000)
      )
      console.log('currentBid: ' + this.currentBid)

      if (
        Number(this.bidAmount * 1000000000000000000) +
          Number(this.minBidStep * 1000000000000000000) <
        this.currentBid
      ) {
        this.errorText =
          'Please enter an amount greater then the current bid + minimum bid step'
        this.dialogError = true
        return
      }

      this.currentWinner = await this.contract.highestBidder(
        Number(this.tokenID)
      )
      this.dialogPlaceBid = true
    },

    //buy a song
    async placeBid() {
      this.dialogPlaceBid = false
      this.txHash = null
      this.boxError = false
      this.errorText = null

      if (this.signer === null) {
        console.log('signer is null!')

        this.errorText = 'please connect your wallet first'
        this.boxError = true
        return
      }

      //verify if the wallet is not block listed by international sanctions etc.
      await this.verifySanctions(this.account)

      this.contract = new ethers.Contract(
        CONTRACT_ADDR,
        CONTRACT_ABI,
        this.signer
      )

      this.isLoading = true
      this.loadingText =
        'Sending transaction to the blockchain. Please check your wallet for confirmation.'

      try {
        const overrides = {
          value: String(this.bidAmount * 1000000000000000000),
        }
        const tx = await this.contract.bid(Number(this.tokenID), overrides)
        if (tx.hash) {
          await this.onTxHashLogic(tx.hash)
        }
      } catch (err) {
        this.isLoading = false
        if (String(err).includes('user rejected')) {
          this.$toast.info('Transaction canceled')
          this.boxError = false
          this.errorText = null
          return
        }
        if (err.message.includes('denied')) {
          this.$toast.info('Transaction canceled')
          this.boxError = false
          this.errorText = null
          return
        } else if (err.message.includes('insufficient funds')) {
          this.errorText = 'You do not have enough ETH for this transaction'
        } else if (err.message.includes('cannot estimate gas')) {
          const error = JSON.parse(JSON.stringify(err))
          this.errorText = error.reason
        } else {
          this.errorText = err.message
        }
        this.boxError = true
      }
    },
    //check against a sanctioned wallet
    async verifySanctions(address) {
      try {
        const res = await this.$axios.get(
          'https://api.crypto-sanctions.com/v1/check?address=' + address,
          {
            headers: {
              'X-API-KEY':
                'a006cea070b7145adcfcd536f27d2d9a381486579bc11eadc4b8',
            },
          }
        )
        if (res.data.sanctioned) {
          this.$router.push('/other/fatal_error')
          return
        }
        console.log('Wallet ' + address + ' not found in sanctions list')
      } catch (error) {
        console.log('Failed to check crypto-sanctions.com: ' + error)
      }
    },
    //wait for tx hash
    async onTxHashLogic(txHash) {
      this.loadingText =
        'Transaction submitted successfully. Waiting for it to be processed...'
      this.isLoading = false
      this.isLoadingTransactionReceipt = true

      const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
      }
      await sleep(2000)

      await this.ethers.waitForTransaction(txHash)

      try {
        let receipt = await this.ethers.getTransactionReceipt(txHash)
        if (receipt === null) {
          console.log(`Failed to get tx receipt....`)
          await sleep(2000)
        }
        this.txHash = txHash
        await sleep(3000)
        this.isLoadingTransactionReceipt = false
      } catch (er) {
        this.isLoadingTransactionReceipt = false
        console.log(`Receipt error:`, er)
      }
    },
    async loadOwnershipList() {
      //load NFTs
      let nftsOwned = await this.contract.tokensOfOwner(this.account)
      if (nftsOwned.length > 0) {
        await this.displayNFTs(nftsOwned)
      } else {
        console.log('no nfts owned with this account')
      }
    },
    async displayNFTs(nftsOwned) {
      //get base URI
      let arrOwnedNFTs = []
      for (let i = 0; i < nftsOwned.length; i++) {
        let response = await fetch(
          'https://api.originheroes.com/metadata/' + nftsOwned[i] + '.json'
        )
        let tokenJson = await response.json()
        tokenJson.tokenID = nftsOwned[i]
        arrOwnedNFTs.push(tokenJson)
      }
      this.ownedNFTs = arrOwnedNFTs
    },
    async findMinimalBid(tokenID) {
      this.pendingWinner = null
      console.log('Finding minimal bid for ', tokenID)
      //get minimum bid for the token
      this.lastBid = Number(await this.contract.highestBid(Number(tokenID)))

      this.minBid = this.lastBid + this.minBidStep
      this.bidAmount = this.minBid / 1000000000000000000
      this.bidAmountDisabled = false

      if (this.lastBid !== 0) {
        this.pendingWinner = await this.contract.highestBidder(tokenID)
      }
    },
    //connect wallet button
    async metamaskButtonClicked() {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      await provider.send('eth_requestAccounts', [])
      this.signer = provider.getSigner()
      this.provider = 'web3'
      this.ethers = new ethers.providers.Web3Provider(window.ethereum, 'any')

      //verify you are on the correct network
      this.ethers.on('network', (newNetwork, oldNetwork) => {
        console.log('newNetwork.chainId :>> ', newNetwork.chainId)
        if (Number(newNetwork.chainId) !== Number(NETWORK_ID)) {
          this.showNonMainnetWarning = true
        } else {
          this.showNonMainnetWarning = false
        }
      })

      this.signer = this.ethers.getSigner()
      this.account = await this.signer.getAddress()

      const addr = await this.signer.getAddress()
      this.walletBtnText =
        addr.substr(0, 8) + '...' + addr.substr(addr.length - 5, addr.length)

      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length < 1) return
        this.walletBtnText =
          accounts[0].substr(0, 8) +
          '...' +
          accounts[0].substr(accounts[0].length - 5, accounts[0].length)
      })
      const { chainId } = await this.ethers.getNetwork()
      if (chainId !== NETWORK_ID) {
        this.showNonMainnetWarning = true
      }
      await this.loadOwnershipList()
    },
    format(number) {
      if (number < 10) return '0' + number
      return number
    },
  },
  watch: {
    tokenID: function (newVal, oldVal) {
      console.log('new tokenID amount: ' + newVal)
      this.lastBid = null
      this.minBid = null
      this.bidAmountDisabled = true
      this.findMinimalBid(newVal)
    },

    timerCount: {
      handler(value) {
        setTimeout(() => {
          if (!this.auctionEndTime) {
            return
          }
          let now = new Date().getTime()
          var endDate = new Date(this.auctionEndTime * 1000)
          // Find the distance between now and the count down date
          let distance = endDate - now

          let isFinished = false
          if (distance < 0) {
            isFinished = true
          }

          // Time calculations for days, hours, minutes and seconds
          let days = this.format(Math.floor(distance / (1000 * 60 * 60 * 24)))
          let hours = this.format(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          )
          let minutes = this.format(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          )
          let seconds = this.format(Math.floor((distance % (1000 * 60)) / 1000))
          this.timerCount = {
            days,
            hours,
            minutes,
            seconds,
            isLoaded: true,
            isFinished: isFinished,
          }
        }, 1000)
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
}
</script>



<style lang="scss" scoped>
.timer {
  display: flex;
  line-height: 1.15;
}
.timer div {
  font-size: 30px !important;
}
.timer span {
  font-size: 30px !important;

  line-height: 1;
}
.timer p {
  font-size: 12px !important;
  text-align: center;
  margin: auto;
}
</style>