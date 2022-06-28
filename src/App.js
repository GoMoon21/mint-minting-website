import './css/App.css';
import useMetaMask from './assets/metamask';
import { useState } from 'react';
// import { bootstrap } from 'bootstrap/dist/css/bootstrap.css';

function App() {
  const { ConnectWallet, DisconnectWallet, walletAddr, connected } = useMetaMask();
  const [mintAmount, setMintAmount] = useState(1);
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);

  const enableShow = () => {
    setFlag(!flag);
    console.log(flag);
  }

  const enableShow1 = () => {
    setFlag1(!flag1);
    console.log(flag1);
  }

  const enableShow2 = () => {
    setFlag2(!flag2);
    console.log(flag);
  }

  const changeMint = (ch) => {
    if (ch === true) {
      mintAmount >= 20 ? setMintAmount(20) : setMintAmount(mintAmount + 1);
    } else {
      mintAmount <= 1 ? setMintAmount(1) : setMintAmount(mintAmount - 1);
    }
  }

  return (
    <div id="__next" data-reactroot="">
      <div class="main min-h-screen p-[15px] bg-primary bg-no-repeat bg-cover bg-center relative w-full" style={{ backgroundColor: 'rgba(64, 143, 200, 1)' }}>
        <div class="flex items-center flex-col" style={{ marginTop: 80 }}>
          <div class="container-fluid w-full">
            <div class="row justify-center">
              <div class="text-center w-full relative">
                <h1
                  class="md:text-[8.333333333333332vw] text-[14.374999999999998vw] font-black text-second txt mb-[30px] md:mb-[20px]"
                  style={{ fontFamily: "Grandstander, sans-serif" }}
                  >
                  NFT Words</h1>
                <div class="flex justify-center md:right-[30px] translate-y-[-50%] z-10"><a
                  class="btn mx-[20px] outline outline-[6px] outline-primarytext flex justify-center items-center font-black uppercase md:p-[14px_24px_10px] p-[8px_15px_6px] duration-150 hover:p-[8px_10px_6px] hover:md:p-[14px_15px_10px] md:text-[85%] text-[20px] bg-primary hover:bg-second text-primarytext"
                  target="_blank" href="https://twitter.com/everyapematters" data-nsfw-filter-status="swf"
                  style={{ backgroundColor: '#408fc8' }}
                  >Twitter</a>
                  <a class="btn mx-[20px] outline outline-[6px] outline-primarytext flex justify-center items-center font-black uppercase md:p-[14px_24px_10px] p-[8px_15px_6px] duration-150 hover:p-[8px_10px_6px] hover:md:p-[14px_15px_10px] md:text-[85%] text-[20px] bg-primary hover:bg-second text-primarytext"
                    target="_blank" href="https://opensea.io/collection/every-ape-matters"
                    data-nsfw-filter-status="swf" style={{ backgroundColor: '#408fc8' }}>Opensea</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row flex flex-wrap items-center relative z-[1]">
            <div class="lg:flex-[0_0_auto] lg:w-12/12 w-full">
              <div
                class="flex justify-center flex-col min-w-[calc(100vw_-_30px)] md:min-w-[550px] md:m-[0_auto] text-center items-center">
                <div class="text-center pt-[20px] pb-[20px] w-full border-black note text-primarytext">
                  <p class="px-3 text-[150%] font-bold" data-nsfw-filter-status="swf">1543/5000
                  </p>
                  <main class="flex justify-center flex-col items-center gap-4 pt-4">
                    <div class="w-ful">
                      <div class="flex justify-center items-center w-full gap-2 mb-[30px] cursor-pointer">
                        <span onClick={e => changeMint(false)} style={{ backgroundColor: '#408fc8' }}
                        class="btn mx-[10px] md:mx-[20px] outline outline-[6px] outline-primarytext flex justify-center items-center font-black uppercase md:p-[14px_24px_10px] p-[8px_15px_6px] duration-150 hover:p-[8px_10px_6px] hover:md:p-[14px_15px_10px] md:text-[85%] text-[20px] bg-second hover:bg-primary text-primarytext"
                        data-nsfw-filter-status="swf">-</span>
                        <input type="text" class="w-[30px] bg-transparent font-bold text-center placeholder:text-black placeholder:opacity-100 pointer-events-none"
                          value={mintAmount} />
                          <span style={{ backgroundColor: '#408fc8' }}
                            class="btn mx-[10px] md:mx-[20px] outline outline-[6px] outline-primarytext flex justify-center items-center font-black uppercase md:p-[14px_24px_10px] p-[8px_15px_6px] duration-150 hover:p-[8px_10px_6px] hover:md:p-[14px_15px_10px] md:text-[85%] text-[20px] bg-second hover:bg-primary text-primarytext"
                            data-nsfw-filter-status="swf"
                            onClick={e => changeMint(true)}
                            >+</span><button
                              class="btn mx-[20px] outline outline-[6px] outline-primarytext flex justify-center items-center font-black uppercase md:p-[14px_24px_10px] p-[8px_15px_6px] duration-150 md:text-[85%] text-[20px] bg-second hover:bg-primary text-primarytext"
                              disabled="" style={{ backgroundColor: '#408fc8' }} onClick={ConnectWallet}>Mint</button>
                      </div>
                    </div>
                    <header class="px-2">
                      <p class="font-bold leading-none" data-nsfw-filter-status="swf">Select how many NFT Words you want to mint. Max 20 per transaction
                      </p>
                    </header>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="main min-h-screen p-[15px] bg-no-repeat bg-cover bg-center relative w-full" style={{ minHeight: '40vh' }}>
        <div className="container-fluid top-div-mint d-flex flex-column align-items-center pb-5">
          <p style={{ fontSize: 30, textAlign: "center" }}>Frequently Asked Questions (FAQ)</p>
          <button onClick={e => enableShow(0)} style={{ width: "100%" }} className="accordion">What is NFT in blockcchain</button>
          <div className="panel" style={{ display: flag ? 'block' : 'none' }}>
            <p>NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple terms these cryptographic assets are based on blockchain technology. They cannot be exchanged or traded equivalently like other cryptographic assets.</p>
          </div>
          <button className="accordion" style={{ width: "100%" }} onClick={e => enableShow1()}>What is Smart Contract ?</button>
          <div className="panel" style={{ display: flag1 ? 'block' : 'none' }}>
            <p>
              Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met.
            </p>
          </div>

          <button className="accordion" style={{ width: "100%" }} onClick={e => enableShow2()}>What is Opensea !</button>
          <div className="panel" style={{ display: flag2 ? 'block' : 'none' }}>
            <p>
              At OpenSea, we're excited about a brand new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability of digital goods.
              A core part of our vision is that open protocols like Ethereum and interoperable standards like ERC-721 and ERC-1155 will enable vibrant new economies. We're building tools that allow consumers to trade their items freely, creators to launch new digital works, and developers to build rich, integrated marketplaces for their digital items.
              We’re proud to be the first and largest marketplace for NFTs.
            </p>
          </div>
        </div> 
      </div>     
    </div>
  );
}

export default App;
