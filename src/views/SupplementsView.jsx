import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppLoader from "../ui/app-loader/AppLoader"
import DataTable from "../components/data-table/DataTable"
import AppModal from "../ui/app-modal/AppModal"
import SidebarLeft from "../components/sidebar-left/SidebarLeft"
import SidebarRight from "../components/sidear-right/SidebarRight"
import "./index.scss"

const SupplementsViews = () => {
  const isLoading = useSelector((state) => state.fromApi.isLoading)

  return (
    <div>
      {isLoading ? (
        <div>
          <AppLoader />
        </div>
      ) : (
        <div
          className="app"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gridColumnGap: "8px",
          }}
        >
          <SidebarLeft />
          <DataTable />
          <SidebarRight />
          <AppModal />
        </div>
      )}
    </div>
  )
}

export default SupplementsViews
