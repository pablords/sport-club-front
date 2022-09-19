import * as React from 'react';
import List from '@mui/material/List';
import { PrtnersItem } from "./components/Item"
import Api from "./services/api"
import { IPrtnersItemProps } from "./components/Item"
import { format } from "date-fns"
import { LinearProgress } from "@mui/material"

export function PartnesList() {
  const [partners, setPartners] = React.useState<IPrtnersItemProps[]>([])
  const [loading, setLoading] = React.useState(false)

  const getPartners = async () => {
    setLoading(true)
    const data = await Api.getPartners()
    setPartners(data)
    setLoading(false)
  }


  const getEventButton = (e) => {
    loadAllData()
  }

  document.getElementById("button-refresh").addEventListener("click", getEventButton)


  const loadAllData = () => {
    getPartners()
  }

  React.useEffect(() => {
   loadAllData()
  }, [])

  return (
    <>
      {
        loading ?
          <LinearProgress />
          :
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
              partners.map((p, i) => (
                <PrtnersItem
                  key={i}
                  id={p.id}
                  name={p.name}
                  birthDate={format(new Date(p.birthDate), "dd/mm/yyyy")}
                />
              ))
            }
          </List>
      }


    </>

  );
}
