import styles from './dock-ui.module.css';

/* eslint-disable-next-line */
export interface DockUiProps {}

export function DockUi(props: DockUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DockUi!</h1>
    </div>
  );
}

export default DockUi;
