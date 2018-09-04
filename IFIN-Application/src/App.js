import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
     <div className="App">
           <div className="leftpane">

                <Leftpane/>
           </div>
           <div className="rightpane">

               <Rightpane/>
            </div>
       </div>
    );
  }
}

class Leftpane extends Component {
  
  render() {
    return (
      <div>
      <div id="listOfPricesAndChanges" className="listOfPricesAndChanges">
          <ListOfPricesAndChanges/>
      </div>
       <div id="priceAndDepth" className="priceAndDepth">
          <PriceAndDepth/>
      </div>
      <div id="ordersAndHistory" className="ordersAndHistory">
          <OrdersAndHistory/>
      </div>

       </div> 
 
    );
  }
}

class Rightpane extends Component {
  
  render() {
    return (
    <div>
      <div id="buyAndSell" className="buyAndSell">
          <BuyAndSell/>
      </div>
       <div id="markets" >
          <div className="markets"> <h5> Markets</h5> </div>
          
      </div>
      <div id="bTCNETH" className="bTCNETH">
          <BTCNETH/>
      </div>
        
    </div>
    );
  }
}

class ListOfPricesAndChanges extends Component {
  
  render() {
    return (
    <div>
      <div id="ethereumExchange" className="linksforPricesAndChanges etherenumHeading">
         <div > Ethereum Exchange</div>
         <div className="etherenumSubHeading"> ETH/BTC</div>

       </div>
       <div id="price" className="linksforPricesAndChanges priceChange ">
          <div >  Last Price</div>
         <div id="lastPrice" className="priceChangeSubHeading"> 0.000075</div>
       </div>
        <div id="change" className="linksforPricesAndChanges priceChange">
         
          <div >   24hr change</div>
         <div id="changePrice" className="priceChangeSubHeading"> 0.000075</div>
       </div>
       <div id="high" className="linksforPricesAndChanges priceChange">
          
           <div >   24hr High</div>
         <div id="highPrice" className="priceChangeSubHeading"> 0.000075</div>
       </div>
       <div id="low" className="linksforPricesAndChanges priceChange">
          
           <div >   24hr low</div>
         <div id="lowPrice" className="priceChangeSubHeading"> 0.000075</div>
       </div>
       <div id="volume" className="linksforPricesAndChanges priceChange">
         
           <div >    24hr volume</div>
         <div id="volumePrice" className="priceChangeSubHeading"> 0.000075</div>
       </div>

    </div>
    );
  }
}

class PriceAndDepth extends Component {
  
  render() {
    return (
    <div>
      <div className="buttonsDiv">
        <button className="PriceAndDepthButtons" > Price </button>
        <button className="PriceAndDepthButtons" > Depth </button>
      </div>
      <div className="priceAndDepthBody">
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
            &nbsp; <br></br>
      

      </div>
        
    </div>
    );
  }
}

class OrdersAndHistory extends Component {
  
  render() {
    return (
    <div>
      <div id="orders" className="orders">
          <Orders/>
       </div> 
      <div id="history" className="history">
          <History/>
      </div>

    </div>
    );
  }
}

class Orders extends Component {
  
  render() {
    return (
    <div>
      <div>
          <button className="ordersButton">Buy Orders</button>
          <button className="ordersButton"> Sell Orders</button>
          <button className="ordersButton"> My Orders</button>
      </div>
      <div>
      <table>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
            <td>18 Apr 9</td>
            <td>Buy</td>
            <td>0.0000345</td>
            <td>0.0000345</td>
            <td>0.0000345</td>
          </tr>

        </table>
      </div>
        
    </div>
    );
  }
}


class History extends Component {
  
  render() {
    return (
    <div>
      <div>
          <button className="historyButton">Trade History</button>
          <button className="historyButton">Market History</button>
      </div>
      <div>
      <table>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
            <td>18 Apr 9</td>
            <td>Buy</td>
            <td>0.0000345</td>
            <td>0.0000345</td>
            <td>0.0000345</td>
          </tr>

        </table>
      </div>
        
    </div>
    );
  }
}



class BuyAndSell extends Component {
  
  render() {
    return (
   <div>
      <div>
          <button className="buyNSellTabs">Market</button>
          <button className="buyNSellTabs">Limit</button>
          <button className="buyNSellTabs">Stop</button>
      </div>
      <div>
          <div id="buy" className="buyNSellArea">
              <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
              <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
              <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
             
              <button className="buttonBuy">BUY</button>
          </div>
          <div id="sell" className="buyNSellArea">
              <span><label >Price</label><input   name="price"  className="inputPriceAmount" id="pricetext" type="text" /><input   name="BTH"  className="inputPriceAmount2"  type="text" value="BTH" /></span>
              <span><label >Amount</label><input name="amount" className="inputPriceAmount" id="amountText" type="text" /><input   name="ETH"  className="inputPriceAmount2"  type="text" value="ETH" /></span>
              <span><label >Total</label><input name="total" className="inputTotal" id="totalText" type="text" /><input   name="ETH2"  className="inputTotal2"  type="text" value="ETH" /></span>
             

              <button className="buttonSell">Sell</button>
          </div>
      </div>
        
    </div>
    );
  }
}


class BTCNETH extends Component {
  
  render() {
    return (
   <div>
      <div>
          <button className="btcEthButton">BTC</button>
          <button className="btcEthButton">ETH</button>
      </div>
      <div>
      <table>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount(ETH)</th>
            <th>Total(BTC)</th>
          </tr>
          <tr>
            <td>18 Apr 9</td>
            <td>Buy</td>
            <td>0.0000345</td>
            <td>0.0000345</td>
            <td>0.0000345</td>
          </tr>

        </table>
      </div>
        
    </div>
    );
  }
}


export default App;
