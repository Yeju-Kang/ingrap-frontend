import React, { useState } from "react";
import { Box,  Divider, Tabs, Tab} from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import EarningsStats from "./EarningsStats";
import LinkedAccounts from "./LinkedAccounts"
import PaymentMethods from "./PaymentMethods"
import StatisticsCards from "./StatisticsCards"


const ProfilePage = () => {
    const [tabValue, setTabValue] = useState(0);
    const handleChangeTab = (event, newValue) => setTabValue(newValue);
  
    return (
      <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
        <ProfileHeader name="Paul Warrior" email="cielo_nitzsche@noemi.biz" avatar="https://i.pravatar.cc/100" />
        <EarningsStats totalEarned="£2K+" sold="20 plans" />
        
        <Tabs value={tabValue} onChange={handleChangeTab}>
          <Tab label="Profile" />
          <Tab label="Statistics" />
          <Tab label="Payment" />
          <Tab label="Reviews" />
        </Tabs>
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: "flex", gap: 3 }}>
          <LinkedAccounts />
          <PaymentMethods />
        </Box>
        
        <StatisticsCards stats={[
          { value: "£2.5K", label: "Total earned" },
          { value: "257", label: "Plans bought" },
          { value: "64", label: "New Clients" },
          { value: "4.5/5", label: "Avg rating" }
        ]} />
      </Box>
    );
  };
  
  export default ProfilePage;
  