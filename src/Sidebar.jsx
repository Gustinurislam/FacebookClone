import { Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, VideoLibrary } from "@material-ui/icons";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";


export default function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />

            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title='Friends'/>
            <SidebarRow Icon={Chat} title='Messenger'/>
            <SidebarRow Icon={Storefront} title='Marketplace'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
        </div>
    )
}

