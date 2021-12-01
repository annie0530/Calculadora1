import React from 'react'
import { Stack, Image } from "react-bootstrap"
import { Calculator, PersonBadgeFill } from "react-bootstrap-icons"

const ResultItem = () => {
    return (
        <>
            <Stack gap={4} direction="horizontal">
                <div>
                    <Stack gap={2} direction="horizontal">
                        <Calculator/>
                        <div>Esther</div>
                    </Stack>
                    <Stack gap={2} direction="horizontal"><div>Auxilio de transporte: true</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Clase de riesgo: 1</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Fecha de finalizacion: 31 de enero de 2021</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Fecha de inicio: 1 de enero de 2021</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Porcetaje de salud: 4</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Salario: $1.000.000</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Porcentaje de arl: 4</div></Stack>
                    <Stack gap={2} direction="horizontal"><div>Porcentaje de pension: 4</div></Stack>
                </div>
            </Stack>
        </>
    )
}

export default ResultItem
