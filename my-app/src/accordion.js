import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
export default function Accordion_sample() {
  return (
      <>
  
      <Accordion allowZeroExpanded>
      <div className="main2-col main2-col1">
        <ul>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton><h2>個人のお客様</h2></AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>  <li>＞口座をひらく</li>
                        <li>＞住宅ローン</li>
                        <li>＞投資信託</li>
                        <li>＞外貨預金</li>
                        <li>＞バンクイック</li>
                        <li>＞キャンペーン一覧</li></AccordionItemPanel>
        </AccordionItem>
        </ul>
    </div>
    <div className="main2-col main2-col2">
        <ul>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
                <h2>法人のお客様</h2>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
                <li>＞口座をひらく</li>
                <li>＞でんさい</li>
                <li>＞CSRの取り組み</li>
                <li>＞地球環境問題への対応</li>
                <li>＞CSRの取り組み</li>
                <li>＞Global Website</li>
          </AccordionItemPanel>
        </AccordionItem>
        </ul>
    </div>
    <div className="main2-col main2-col3">
        <ul>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
                <h2>株主・投資家の皆様</h2>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
                <li>＞決算広告</li>
                <li>＞社債情報</li>
          </AccordionItemPanel>
        </AccordionItem>
        </ul>
    </div>
    <div className="main2-col main2-col4">
        <ul>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
                <h2>採用情報</h2>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
                <li>＞新卒採用</li>
                <li>＞中途採用</li>
                <li>＞海外現地採用</li>
          </AccordionItemPanel>
        </AccordionItem>
        </ul>
    </div>
      </Accordion>
    



</>
  );
}
