echo "generating..."
npm run generate
echo "zipping..."
tar -zcvf dist.tar.gz dist


echo "copying..."
scp -oStrictHostKeyChecking=no dist.tar.gz root@digitalocean:/var/www/cities
echo "cleanup..."
rm dist.tar.gz;
rm -rf dist
echo "unzipping..."
ssh -oStrictHostKeyChecking=no root@digitalocean 'cd /var/www/cities; tar -xvf dist.tar.gz; rm dist.tar.gz'
echo "done. see result at https://cities.yoniishappy.com"