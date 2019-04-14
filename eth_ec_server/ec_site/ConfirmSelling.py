import os
import sys
from django.conf import settings
import json
from web3 import Web3

def confirmSelling(price, u_address):
# def confirmSelling():
    with open(os.path.join(settings.BASE_DIR, "ec_site/multisigPaymentABI.json"), "r") as f:
        artifact = json.load(f)

    # data
    abi = artifact
    o_p_key = settings.O_P_KEY
    o_address = '0x61b12F6D46412aAe6F857FDF059E3e48D4ecF218'
    contract_address = '0x055572ea030cdb52b8724f97914fc69ec5f01497'
    checksumed_c_address = Web3.toChecksumAddress(contract_address)

    # test value
    # price = 0.1
    # u_address = '0x4eBe8553beF263f905c3bb05Fa9437e88560EeA6'

    # keisann
    value = Web3.toWei(price, 'ether');
    # setuzoku
    w3 = Web3(Web3.HTTPProvider("https://kovan.infura.io/v3/" + settings.INFURA_KEY))
    # get nonce
    nonce = w3.eth.getTransactionCount(o_address)
    # get contract
    m_payment = w3.eth.contract(abi=abi, address=checksumed_c_address)
    # make tx
    m_payment_tx = m_payment.functions.confirmSelling(
            value,
            u_address
    ).buildTransaction({
        'chainId': 42,
        'gas': 440000,
        'gasPrice': w3.toWei('1', 'gwei'),
        'nonce': nonce,
    })
    signed_tx = w3.eth.account.signTransaction(m_payment_tx, private_key=o_p_key)

    # sendTx
    w3.eth.sendRawTransaction(signed_tx.rawTransaction)

    # detect tx status
    while True:
        receipt = w3.eth.getTransactionReceipt(signed_tx.hash)
        if receipt is not None:
            print('receipt : ', receipt)
            mined_receipt = receipt
            break

    print('tx hash : ', signed_tx.hash)

    return bool(mined_receipt.status == 1)

if __name__ == "__main__":
    print(confirmSelling())
