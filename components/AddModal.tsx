import { Modal, ModalProps } from 'react-native';
import PageLayout from '@components/Page';
import { useRef } from 'react';

interface AddModalProps extends Pick<ModalProps, 'visible' | 'onDismiss' | 'onRequestClose'> {}
export default function AddModal(props: AddModalProps) {
  return (
    <Modal animationType={'slide'} presentationStyle={'pageSheet'} {...props}>
      <PageLayout title={'Add Modal'} />
    </Modal>
  );
}
