# デプロイ参考：https://nmmmk.hatenablog.com/entry/2018/05/01/101126


#環境構築
pythonはpipenvで管理
pipenvの環境をpipfileで作る→pipenv shellで仮想環境立ち上げ

javascriptはyarnで管理
yarn installでライブラリインストール

# 開発サーバー起動
python eth_ec_server/manage.py runserver

# react変更適用
多分eth_ec_server/で　
npm run build

# デプロイ用にやること
・デプロイ用ブランチ作る
・settings.pyのdebugをFalseにする
・環境変数をセットする
・色々本番用に出てくるバグを治す、、
・manage.py collectstatic

# デプロイ手順
１、クローンしてくる
2、manage.py collectstatic
3、docker-compose up -d
