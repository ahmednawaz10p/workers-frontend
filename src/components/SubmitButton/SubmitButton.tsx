import { DownloadOutlined } from '@ant-design/icons';
import { StyledAntdButton } from './SubmitButton.styles';

export const SubmitButton: React.FC = () => {
    return (
        <StyledAntdButton type="primary" icon={<DownloadOutlined />} size={'large'}>
          Submit
        </StyledAntdButton>
    )
}