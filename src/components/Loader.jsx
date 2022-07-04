import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const customSpin = (
  <LoadingOutlined
    style={{
      fontSize: 26,
    }}
    spin
  />
);

function Loader() {
  return (
    <div className="loader">
        <Spin indicator={customSpin}/>
    </div>
  )
}

export default Loader