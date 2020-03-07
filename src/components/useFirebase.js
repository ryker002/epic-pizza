import React, { useState, useEffect } from "react"
import getFirebase from "./firebase"

export default function useFirebase() {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    setInstance(getFirebase())
  }, [])

  return instance
}
