import time
from datetime import datetime
from selenium import webdriver
import os
import json


LOGIN_ID = os.getenv("amazon_email", "myemail")
LOGIN_PASSWORD = os.getenv("amazon_pass", "mypassword")
LOGIN_CARD = os.getenv("amazon_card", "000000000000")
SENDER_NAME = 'Calano'

ITEM_URL = 'https://www.amazon.co.jp/Amazonギフト券-1_JP_Email-Amazonギフト券-Eメールタイプ-Amazonベーシック/dp/B004N3APGO/ref=sr_1_6?ie=UTF8&qid=1547705797&sr=8-6&keywords=ギフト'

ACCEPT_SHOP = 'Amazon'
LIMIT_VALUE = 33500


def l(str):
    print("%s : %s"%(datetime.now().strftime("%Y/%m/%d %H:%M:%S"),str))

def pay_amazon_gift(wish, send_to_address):
    # ブラウザの起動
    print('----------start payInAmazon')
    try:
        with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "amazon_cookies.json"), 'r') as cookie_f_r:
            print('open success')
            cookies_r = json.load(cookie_f_r)
        print('--------cookies', cookies_r[0])
    except:
        l('Failed to open browser.')
        return False

    try:
        options = webdriver.ChromeOptions()
        # ヘッドレスモードを有効にする（次の行をコメントアウトすると画面が表示される）。
        options.add_argument('--headless')
        # ユーザーデータを有効にする
        # userdata_dir = 'seleniumChromeUserData'  # カレントディレクトリの直下に作る場合
        # os.makedirs(userdata_dir, exist_ok=True)
        # options.add_argument('--user-data-dir=' + userdata_dir)
        b = webdriver.Chrome(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'chromedriver'), options=options)
        # b = webdriver.Chrome(os.path.join(os.path.dirname(__file__), 'chromedriver'))
        b.get(ITEM_URL)
    except:
        l('Failed to open browser.')
        return False
    # cookie追加する
    try:
        for c in cookies_r:
            b.add_cookie(c)
    except:
        l('Failed to add cookie.')
        b.quit()
        return False

    l('kokomadekitayo')


    # 在庫確認
    try:
        # 金額確認
        for i in range(1, 6):
            try:
                value = ''.join(b.find_element_by_id('gc-mini-picker-amount-'+str(i)).text[1:].split(','))
                print(value)
                print(wish)
                if value == str(wish):
                    print('gc-mini-picker-amount-'+str(i))
                    b.execute_script("document.getElementById('gc-mini-picker-amount-" + str(i) + "').scrollIntoView();")
                    b.find_element_by_id('gc-mini-picker-amount-'+str(i)).click()
                    l('check value')
                    break
            except:
                l('Failed to find button')
                b.quit()
                return False
        # 送り先を入れる
        b.find_element_by_id('gc-order-form-recipients').send_keys(send_to_address)
        # b.find_element_by_id('gc-order-form-senderName').send_keys(SENDER_NAME)
        l('fill_email')
        b.find_element_by_id('gc-buy-box-bn').click()
        l('click pay')
    except:
        # b.refresh()
        l('Failed to find button')
        b.quit()
        return False

    # 購入手続き
    # b.get('https://www.amazon.co.jp/gp/cart/view.html/ref=nav_cart')
    print(b.title)
    # ログイン
    if 'ログイン' in b.title:
        try:
            l('fill email.')
            b.find_element_by_id('ap_email').send_keys(LOGIN_ID)
            b.find_element_by_id('ap_password').send_keys(LOGIN_PASSWORD)
            b.find_element_by_id('signInSubmit').click()
            print(b.title)
            l('LOGIN PASS.')
        except:
            l('LOGIN FAILED.')
            b.quit()
            return False

        # 値段の確認
        try:
            b.find_element_by_id('pm_0').click()
            b.find_element_by_id('addCreditCardNumber').send_keys()
            b.find_element_by_id('confirm-card').click()
            b.find_element_by_id('continue-top').click()
            l('reach last page')
        except:
            l('Error in CC-card')
            b.quit()
            return False
    elif '支払い' in b.title:
        try:
            b.find_element_by_id('continue-top').click()
        except:
            l('Error in CC-card')
            b.quit()
            return False



    # 注文の確定
    time.sleep(5)
    print(b.title)
    print(b.find_element_by_name('placeYourOrder1').text)
    l('ALL DONE.')
    cookies = b.get_cookies()
    with open("amazon_cookies.json", 'w') as cookie_f:
        json.dump(cookies, cookie_f)
    b.quit()
    # for c in cookies:
    #     print(c)
    return True

if __name__ == '__main__':
    pay_amazon_gift(wish=2000, send_to_address="fxxkinspam@gmail.com")
