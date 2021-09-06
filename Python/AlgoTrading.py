import os
import requests
import ccxt
import asyncio
import numpy as np
import pandas as pd
from dotenv import load_dotenv
import matplotlib.pyplot as plt
from pandas_datareader import data, wb
import matplotlib as mpl
from mpl_finance import candlestick_ohlc
import matplotlib.dates as dates
import datetime
# %matplotlib inline


def initialize(cash=None):
    """Initialize the plot, data storage, and account balances."""
    print("Initializing Account and DataFrame")

    # @TODO: Update to build the plot
    # Initialize Account
    account = {"balance": cash, "shares": 0}

    # Initialize DataFrame
    # @TODO: We will update this later!
    df = fetch_data()

    # Initialize the plot
    build_plot(df)

    # @TODO: We will complete the rest of this later!
    return account, df


def build_plot(df):
    """Build the plot."""

    # @TODO: Build the Initial Plot!
    print("Initializing plot")
    plot = df.plot(title="Current BTC/USD Price")

    return


# @TODO: Create a function to update the plot!
def update_plot(df):
    """Update the plot."""
    plot = df.plot(title="Current BTC/USD Price")

    return


def fetch_data():
    """Fetches the latest prices."""
    print("Fetching data...")
    load_dotenv()
    kraken_public_key = os.getenv("KRAKEN_PUBLIC_KEY")
    kraken_secret_key = os.getenv("KRAKEN_SECRET_KEY")
    kraken = ccxt.kraken({"apiKey": kraken_public_key, "secret": kraken_secret_key})

    close = kraken.fetch_ticker("BTC/USD")["close"]
    datetime = kraken.fetch_ticker("BTC/USD")["datetime"]
    df = pd.DataFrame({"close": [close]})
    df.index = pd.to_datetime([datetime])

    return df


def generate_signals(df):
    #set window for bollinger band 
    bollinger_window = 20 
    #calculate rolling mean and SD
    df['bollinger_mid_band']= df['close'].rolling(window=bollinger_window).mean()
    df['bollinger_std'] = df['close'].rolling(window=20).std()
    #calculate upper and lower 
    df['bollinger_upper_band'] = df['bollinger_mid_band'] + (df['bollinger_std']*1)
    df['bollinger_lower_band'] = df['bollinger_mid_band'] - (df['bollinger_std']*1)
    #calculate bollinger band trading signal
    df['bollinger_long']= np.where(df['close'] < df['bollinger_lower_band'],1.0,0.0)
    df['bollinger_short']= np.where(df['close'] > df['bollinger_upper_band'],-1.0,0.0)
    df['bollinger_signal']= df['bollinger_long']+df['bollinger_short']
    return generate_signals

# df[['close','bollinger_mid_band','bollinger_upper_band','bollinger_lower_band']].plot(figsize=(20,10))
def execute_trade_strategy(signals, account):   
    data = {
        "quantity": 10,
        "origin": "mlTrader",
        "strategy": "1",
        "currency": "FIL/USDT1",
        "stoploss": 60.87,
        "entry": [ 74.09, 70.93, 65.49 ],
        "leverage": 1,
        "market": "binance",
        "expired": False,
        "target": [ 77.19, 81.63, 89.06 ],
        "position": "buy"
    }
    requests.post("https://t0p0376spd.execute-api.us-east-1.amazonaws.com/dev/registerOrders", data=data)


# @TODO: Set the initial configurations and update the main loop to use asyncio
# Set the initial account configuration
account, df = initialize(10000)

# Turns on the interactive mode of matplotlib (https://matplotlib.org/api/_as_gen/matplotlib.pyplot.ion.html)
plt.ion()

# Show the initial line chart
plt.show()

async def main():
    loop = asyncio.get_event_loop()

    while True:
        global account
        global df

        # Fetch new prices data
        new_df = await loop.run_in_executor(None, fetch_data)
        df = df.append(new_df, ignore_index=True)


        print(df.head())

        # Execute the trading strategy
        min_window = 22
        if df.shape[0] >= min_window:
            signals = generate_signals(df)
            account = execute_trade_strategy(signals, account)

        # Update the plot
        update_plot(df)

        # Update line chart
        plt.pause(1)

        # Refresh the matplotlib plotting area to avoid extra memory consumption
        plt.close()

        await asyncio.sleep(1)


# Python 3.7+
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
