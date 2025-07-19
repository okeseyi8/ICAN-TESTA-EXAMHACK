import { useState} from 'react'

const useToggle = (initialValue: boolean = false): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggle = () => {
    setValue(prev => !prev)
  }

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)

  return [value, toggle, setTrue, setFalse]
}

export default useToggle
