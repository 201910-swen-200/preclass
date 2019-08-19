Preclass Repository
------------

This is just some files to help folks get started. You can run directly in VSCode if you install node/npm.

Or you can run in docker.

To build the docker container:

docker build -t preclass .

To run the code:

on Mac/Linux:

docker run --rm -it -v "$PWD":/work -v /work/node_modules preclass yarn test

on Windows:

winpty docker run --rm -it -v /"$PWD":/work -v /work/node_modules preclass yarn test

Note: the first time you run docker you may need to set up the drive mapping on windows:

docker-machine ssh

sudo mkdir -p /c/Users
sudo mount -t vboxsf c/Users /c/Users

