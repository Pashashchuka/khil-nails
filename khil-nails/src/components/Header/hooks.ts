import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useHeader = () => {
  const { i18n } = useTranslation()

  const [isRussian, setIsRussian] = useState<boolean>(false)

  const handleClickBtn = () => {
    setIsRussian(!isRussian)
  }

  useEffect(() => {
    isRussian ? i18n.changeLanguage('russian') : i18n.changeLanguage('english')
  }, [i18n, isRussian])

  return {
    isRussian,
    handleClickBtn,
  }
}
