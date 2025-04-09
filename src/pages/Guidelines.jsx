import React from "react";
import { Link } from 'react-router-dom'
import '../css/doc.css'
import { useTranslation } from 'react-i18next';

const Guidelines = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="Container">
        <header>
            {/* <h1>新思科技 X 陽明交大</h1> */}
            {/* <p className="subtitle">報名流程與詳細資訊</p> */}
        </header>

        {/* Timeline Section */}
        <Section title={t('重要日期')}>
                <TimelineItem icon="📅" text={t('『早鳥優惠時間』：即日起至 4/20 (日) 23:59')} />
                <TimelineItem icon="📅" text={t('開始報名：即日起至 5/30 (六) 23:59')} />
                <TimelineItem icon="📅" text={t('繳費截止：即日起至 6/15 (六) 23:59')} />
                <TimelineItem icon="📅" text={t('錄取結果通知：即日起至 6/15 (六) 23:59')} />
        </Section>

        {/* Registration Fees Section */}
        <Section title={t('報名方式')}>
            <p>{t('請同學填寫報名資料表單，填寫並成功送出當日同學將會收到報名成功信件。')}</p>
            <p className="mg-b-20">{t('錄取結果通知以 E-mail 發送，請同學於信件內容提及之時限內回覆確認狀況，並陸續完成繳費手續。')}</p>
        </Section>

        {/* Registration Fees Section */}
        <Section title={t('報名費用')}>
            <p>{t('1. 中文梯次：')}<span className="highlight">{t('早鳥優惠 $8,800NT')}</span>{t('，定價 $10,900NT')}</p>
            <p className="mg-b-20">{t('另補助 30 名學生免報名費，補助辦法請參閱相關細則')}</p>
            
            <p>{t('2. 英文梯次：定價 $33,000NT')}</p>
            <ul>
                <li>{t('折扣方案 A：兩人同行，一人享半價')}</li>
                <li>{t('折扣方案 B：符合下列任一身份折扣 $1,600NT')}</li>
                <li>{t('交大/陽明交大校友子女、新思員工子女、中華民國護照持有人')}</li>
                <li>{t('A、B方案可疊加使用')}</li>
            </ul>
        </Section>

        {/* Admission Standards Section */}
        <Section title={t('錄取標準')}>
            <ul>
                <li>{t('2025/04/20 23:59 前報名享有')}<span className="highlight">{t('早鳥優惠價格')}</span></li>
                <li>{t('低/中低收入户學生、身心障礙學生或殘障人士子女、特殊境遇家庭之子女報名申請者，主辦方將根據申請資料擇 30 名同學免收報名費，申請結果將統一於錄取信中說明。')}</li>
            </ul>
        </Section>

        {/* Refund Policy Section */}
        <Section title={t('退費規定')}>
            <ul>
                <li>{t('若非疫情等天災事變，因學員之個人因素而錄取後不克參加，得以書面方式向本團隊申請退費，退費標準如下：')}</li>
                <li>{t('1. 營隊開始前 2 週：退費 75%')}</li>
                <li>{t('2. 營隊開始前 1 週：退費 50%')}</li>
                <li>{t('3. 營隊開始後：不予退費')}</li>
            </ul>
        </Section>
        <h3>{t('以上活動資訊主辦方留有最解釋權')}</h3>

        {/* Call to Action Button */}
        <div className="cta-container">
            <Link to='https://docs.google.com/forms/d/e/1FAIpQLScG196gYjMEf62hNkytam3tLChveSGopPgyPkzIBOrgc1WYPA/viewform?pli=1' target='_blank' className="cta-button">{t('立即報名')}</Link>
        </div>
    </div>
  );
};

// Section Component
const Section = ({ title, children }) => (
    <div className="section">
        <h1>{title}</h1>
        {children}
    </div>
);

// Timeline Item Component
const TimelineItem = ({ icon, text }) => (
    <div className="timeline-item">
        <span>{icon}</span>
        <p>{text}</p>
    </div>
);

export default Guidelines;