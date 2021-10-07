import React, { useState, useContext, useEffect, createContext } from 'react'
const Web3Context = createContext()
export const useWeb3Context = () => {
  return useContext(Web3Context)
}

const ConnectWeb3 = ({ children }) => {
  const [isConnect, setConnect] = useState(false)
  return (
    <Web3Context.Provider
      value={{
        isConnect,
        setConnect,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default ConnectWeb3
