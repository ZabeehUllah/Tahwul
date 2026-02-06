import { Box, Typography } from '@mui/material'
import LeadersCardItem from './leaders-card-item/leaders-card-item.coponent'

const LeadersSection = () => {
  return (
    <Box sx={{backgroundColor: '#fff',border: "1px solid #E0E8ED", borderRadius: "10px", padding: "20px"}}>
        <Typography sx={{fontSize:"1rem", fontWeight:"700", color: "#1D3557", marginBottom: "15px"}}>Leaders</Typography>
        <LeadersCardItem />
    </Box>
  )
}

export default LeadersSection