import { ConfigProvider, FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const BackToTopButton = () => {
   return (
      <ConfigProvider
         theme={{
            token: {
               fontSizeIcon: 22,
               controlHeightLG: 56,

               colorFillContent: "rgba(0, 146, 233, 0.8)",
               colorBgElevated: "rgba(0, 146, 233, 0.8)",
            },
         }}
      >
         <div className="">
            <FloatButton.BackTop shape='circle' icon={<ArrowUpOutlined style={{ color: 'black' }} />} />
         </div>
      </ConfigProvider>
   );
};

export default BackToTopButton;