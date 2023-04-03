// import { ethers } from "ethers"
// import { CONTRACT_ADDR } from "../CONSTANTS"
// import { ABI } from "../data/abi"

// async function publicSale(1) {
//       const txHash = null
//       const boxError = false
//       const errorText = null

//       const contract = new ethers.Contract(
//         CONTRACT_ADDR,
//         ABI,
//         this.signer
//       )

//       const isLoading = true
//       const loadingText =
//         'Sending transaction to the blockchain. Please check your wallet for confirmation.'

//         const tx = await contract.publicClaiim(1, overrides)
//         if (tx.hash) {
//           await this.onTxHashLogic(tx.hash)
//         }
//       } catch (err) {
//         this.isLoading = false
//         if (String(err).includes('user rejected')) {
//           this.$toast.info('Transaction canceled')
//           this.boxError = false
//           this.errorText = null
//           return
//         }
//         if (err.message.includes('denied')) {
//           this.$toast.info('Transaction canceled')
//           this.boxError = false
//           this.errorText = null
//           return
//         } else if (err.message.includes('insufficient funds')) {
//           this.errorText = 'You do not have enough ETH for this transaction'
//         } else {
//           this.errorText = err.message
//         }
//         this.boxError = true
//       }
//     }
// }

// function onTxHashLogic(txHash:string) {
//       const loadingText =
//         'Transaction submitted successfully. Waiting for it to be processed...'
//       const isLoading = false
//       const isLoadingTransactionReceipt = true

//       const sleep = (milliseconds:number) => {
//         return new Promise((resolve) => setTimeout(resolve, milliseconds))
//       }
//       await sleep(2000)

//       await ethers.waitForTransaction(txHash)

//       try {
//         let receipt = await this.ethers.getTransactionReceipt(txHash)
//         if (receipt === null) {
//           console.log(`Failed to get tx receipt....`)
//           await sleep(2000)
//         }
//         this.txHash = txHash
//         await sleep(3000)
//         this.isLoadingTransactionReceipt = false
//       } catch (er) {
//         this.isLoadingTransactionReceipt = false
//         console.log(`Receipt error:`, er)
//       }
//     },
export default function anon() {}
