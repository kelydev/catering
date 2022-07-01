import React from 'react'

export default function Alerta({alerta}) {
  return (
    <>
        <div className={`${alerta.error}? red : 'from-sky-400'`}>
            {alerta.msg}
        </div>
    </>
  )
}
