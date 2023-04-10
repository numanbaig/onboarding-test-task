import React from 'react'
interface TextAreaProps {
    placeholder: string;
}

const TextArea = ({ placeholder }: TextAreaProps):JSX.Element => {
  return (
      <textarea
          placeholder={placeholder}
          style={{
              width: "100%", height: "117px", padding: "10px 14px", fontSize: '16px',
              border: '1px solid #D8DDE9',
              boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.05)',
              borderRadius: '8px',
          }}
      />
  )
}

export default TextArea