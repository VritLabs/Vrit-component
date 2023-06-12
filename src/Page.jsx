import Tablewithbars from "./components/Tablewithbars"
import Cardlayout from "./components/Cardlayout"
import Mapbox from "./components/Mapbox"
import Piechart from "./components/Piechart"
import DashboardHead from "./components/DashboardHead"
import Tabular from "./components/Tabular"
import Barchart from "./components/Barchart"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

export default function Page() {

    return (<div className="grid w-[93vw] grid-flow-col grid-cols-6 xl:space-x-10 space-x-16">
        <div className="col-span-1 justify-self-start -ml-16 -mt-9 fixed">
            <Sidebar />
        </div>

        <div className="col-start-2 col-end-7 ">
            <div className="-mt-6 w-full">
                <Navbar />
            </div>

            <div className="col-span-1 md:col-span-2 xl:col-span-5 xl:row-span-1 ">
                <DashboardHead />
            </div>
            <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xl:grid-flow-col  ">

                <div className="">
                    <Cardlayout background={true} button={true} />
                </div>
                <div className="">
                    <Cardlayout />
                </div>

                <div className="">
                    <Cardlayout />
                </div>
                <div className="">
                    <Cardlayout />
                </div>
                <div className="col-span-1 md:col-span-2 xl:col-span-5 xl:row-span-2">
                    <Barchart />
                </div>
            </div>
            <div className="xl:flex mt-4 xl:h-[468px] space-x-4">
                <div className="xl:basis-2/3">
                    <Mapbox />
                </div>
                <div className="xl:basis-1/3 ">
                    <Piechart />
                </div>
            </div>
            <br />

            <div className="xl:mt-16 xl:flex h-[468px] sm:-mt-3 xl:space-x-4">
                <div className="xl:basis-2/5">
                    <Tablewithbars />
                </div>
                <div className="xl:basis-3/5 ">
                    <Tabular />
                </div>

            </div>

        </div></div>)
}