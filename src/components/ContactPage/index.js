import React, { useEffect, useRef } from "react"
import { ContentWrapper, ContactInfo} from "./styles"
import { srConfig } from "@config"
import sr from "@utils/sr"


export default ({ data }) => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <ContentWrapper>
      <ContactInfo ref={revealContainer}>
        <p>
          Information
          Information
          Information
          Information
          Information
          Information
          Information
          Information
          Information
        </p>
      </ContactInfo>
    </ContentWrapper>
  )
}
