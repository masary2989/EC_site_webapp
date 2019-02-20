FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
ADD yarn.lock /code/
ADD package.json /code/
RUN apt-get update
RUN apt-get install -y sudo
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt install -y nodejs build-essential libssl-dev
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg |\
    sudo apt-key add
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | \
    sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update
RUN sudo apt-get install -y yarn
RUN pip install -r requirements.txt
RUN yarn install
ADD . /code/
