import { useState, useEffect, useRef } from 'react';
import { FaEarthAfrica, FaBasketball } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import '../i18n';
import { useTranslation } from 'react-i18next';

const LngSelector = () => {
    
    const [lngSubClose, setLngSubClose] = useState(false);
    const languageSelectorRef = useRef(null); // Add this ref

    // Add this useEffect for click outside handling
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target)) {
            setLangActive(false);
            // console.log('Click Outside');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // ==================== Language Select ====================
    const { t, i18n } = useTranslation();
    const [langActive, setLangActive] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangActive(false);
    };

    const handleLanguageSelect = () => {
        setLangActive(!langActive);
    };

    const handleCloseLng = () => {
        setLngSubClose(false);
    };

    return (
        <ul
            ref={languageSelectorRef}
            style={{ position: 'relative' }}
            className='lngSelector'
        >
        <div onClick={handleLanguageSelect} className='df jc-ca aln-itm-c'>
            <RiEarthFill size={20} />
        </div>
        <ul
            className='df fd-c'
            style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                display: `${langActive ? '' : 'none'}`
            }}
            onClick={() => handleCloseLng(false)}
        >
            <li
                className='lngSub pointer'
                onClick={() => { changeLanguage('ch'); }}
            >
                {t('中文')}
            </li>
            <li
                className='lngSub pointer'
                onClick={() => { changeLanguage('en'); }}
            >
                {t('English')}
            </li>
        </ul>
        </ul>
    )
}

export default LngSelector