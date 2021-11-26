import React from "react";

var patient_name = "Mr X";

function HeaderComponent() {
  return (
    <div className="Header">
      <h1>Daily events of a {patient_name}</h1>

      {/* { timeList.map((val: any) => {          
                  const value = date.format((new Date(val.timestamp)),'YYYY/MM/DD HH:mm:ss');
                    return <h1>{value}</h1>
                  })
                }
            
                { dataList.map((val: any) => {
                    return <h1>{val.id}</h1>
                  })
                } */}
    </div>
  );
}

export default HeaderComponent;
