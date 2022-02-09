import React, {useState, useEffect} from 'react';
import { useMediaQuery } from "react-responsive";

function useCheckMobile() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    
    useEffect(() => {
        if (isTabletOrMobile || isTabletOrMobileDevice) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }


    }, [isDesktopOrLaptop, isBigScreen, isTabletOrMobileDevice, isTabletOrMobile])

    //create mobile view
    const [isMobile, setIsMobile] = useState(false)
  return isMobile;
}

export default useCheckMobile