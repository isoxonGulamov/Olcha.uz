import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./slick.css"

export default () => (
  <Carousel autoPlay>
    <div>
    <img src="https://olcha.uz/image/original/sliders/ru/rXttEfJxS7wxBtjkJNGKFvnibbqqY3BSAKvbXzQJcxtTwC36kZZ4IWTk60tv.png" alt="Huawei"/>
      <p className="legend">Legend 1</p>
      
    </div>
    <div>
    <img src="https://olcha.uz/image/original/sliders/oz/jcHtm3fQa8yAqjIBLQxmFKOtPUW2H0rG4Ki52wLHM2EPv9W2jZIjd92wiZSQ.png" alt="Isitish qurilmalari va kaminlar"/>
      <p className="legend">Legend 2</p>
    </div>
    <div>
    <img src="https://olcha.uz/image/original/sliders/oz/W7ZHLDt5yUy019gvFBLNpna5fJYXKbpXu4UOX8thIeywatadNA9YBTRlhyyn." alt="Maishiy texnika"/>
      <p className="legend">Legend 3</p>
    </div>
    <div>
    <img src="https://olcha.uz/image/original/sliders/oz/Bp99hs7t1sJvulRetbvw9ttWc8dLSRjq2dNQuXpfbmuG7DnYrA0w7U5StmnB." alt="Kiyim va poyabzallar"/>
      <p className="legend">Legend 4</p>
    </div>
    <div>
    <img src="https://olcha.uz/image/original/sliders/oz/Ne0z0REj1L6F4SOzKmLNZD8V50ivQ5WwGaeZmnbucfITBU0O1bp3cs2cRRYs." alt="Butun O&amp;#039;zbekiston bo&amp;#039;ylab yetkazib berish xizmati. Biz har qanday buyurtmangizni butun O&amp;#039;zbekiston bo&amp;#039;ylab tezda etkazib beramiz!"/>
      <p className="legend">Legend 5</p>
    </div>
    <div>
    <img src="https://olcha.uz/image/original/sliders/oz/pAtn5fbaSPJywvRXLfzZZWWwgmt3epBgCpL7XuCZuEdz36oG736EUgtxPbcz." alt="12 oyga tez va qulay muddatli to&amp;#039;lovlar!"/>
      <p className="legend">Legend 7</p>
    </div>
   
  </Carousel>
);
