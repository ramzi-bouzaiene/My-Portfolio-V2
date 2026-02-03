import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import styles from './Modal.module.css'
import { TechnologyIcons } from '../../utils/TechnologyIcons'

interface ModalProps {
  image?: string
  imageStyle?: string
  title: string
  description: string
  tech: string[]
  open: boolean
  handleClose?: (event: React.SyntheticEvent | Event) => void
}

export const CustomModal = ({
  image,
  title,
  description,
  tech,
  open,
  handleClose,
}: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        <img src={image} alt={title} className={styles.image} />
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          className={styles.description}
        >
          {description}
        </Typography>
        <Typography className={styles.tech}>
          <TechnologyIcons technologies={tech} />
        </Typography>
      </Box>
    </Modal>
  )
}
