import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function sideButtons () {
    return (
        <>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button>{' '}
          <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </>
      );
    //   return (
    //     <>
    //     <ButtonGroup vertical>
    //         <Button variant="secondary"> Import Existing Content </Button> </ButtonGroup>
    //         <ButtonGroup vertical>
    //         <Button variant="secondary"> Import from Commons </Button> </ButtonGroup>
    //         <ButtonGroup vertical>
    //         <Button variant="secondary"> Choose Home Page </Button> </ButtonGroup>
    //         <ButtonGroup vertical>
    //         <Button variant="secondary"> View Course Stream </Button> </ButtonGroup>
    //         <ButtonGroup vertical>
    //         <Button variant="secondary"> New Announcement </Button> </ButtonGroup>
    //         <ButtonGroup vertical>
    //         <Button variant="secondary"> New Analytics </Button> </ButtonGroup>
    //         <ButtonGroup vertical>
    //         <Button variant="secondary"> View Course Notifications </Button> </ButtonGroup>
    //     </>
    //         );

}

export default sideButtons;