import './mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState, useCallback } from 'react'
import { AiOutlineDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsBag } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Navbar, Container, Col, Table, Row, Card, Button, Modal } from 'react-bootstrap';
import MyVerticallyCenteredModal from './add-modal'
import MyVerticallyCenteredModal2 from './add-modal2'
import { useHistory } from 'react-router-dom';

const MainPage = () => {


  const loginPage = useHistory();

  const handleOnClick = useCallback(() => loginPage.push('/'), [loginPage]);

  const [inputItem, setInputItem] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const [productList, setProductList] = useState([])
  const [productName, setProductName] = useState("")
  const [productTag, setProductTag] = useState("")
  const [selectedProduct, setSelectedProduct] = useState()
  // const [addItem, setaddItem] = useState([{list:[],}])
  const [showMaterial, setshowMaterial] = useState(false)
  const [productNumber, setProductNumber] = useState(0)

  const dashboardFunc = () => {
    setshowMaterial(false)
  }


  const addProduct = () => {
    if (productName === "" || productTag === "") {
      alert("Please Fill The Form")
      setProductName("")

      setModalShow(true)

    }
    else
      productList.push(currentProduct)
    setProductList([...productList])
    setModalShow(false)
    setProductName("")
    setProductTag("")
  }


  // const [itemsList,setItemsList]=useState(addItem[productNumber].list)
  const addItemFunc = () => {
    // itemsList.push(inputItem)
    // setItemsList([...itemsList])
    // console.log(addItem)
    // console.log(inputItem)

    setModal2Show(false)
    // setaddItem("")
  }

  const addMaterial = (sprod, i) => {
    setSelectedProduct(sprod)
    setProductName(sprod.name)
    setProductTag(sprod.tag)
    setshowMaterial(true)
    setProductNumber(i)
    // console.log(productList)
    // console.log(productNumber)
    // console.log(addItem[i].list)


  }

  const currentProduct = {
    name: productName,
    tag: productTag,
  }


  return (

    <div className="">

      {/* NAVBAR */}

      <Navbar className="nav-bar">
        <Container fluid>
          <Navbar.Brand className="logo" >My Inventory</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="profile-name">
              <a > Profile Name</a>
            </Navbar.Text>
            <a className="logout" onClick={() => handleOnClick()}> &nbsp; <FiLogOut /></a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* PRODUCT LAYOUT */}

      <Container fluid className="main-container">
        <Row>
          <Col sm={4} md={3} lg={2} className="dashboard">
            <a className="title-dashboard" onClick={() => dashboardFunc()}> <span ><AiOutlineDashboard /></span> Dashboard</a>
          </Col>




          <Col className={` products ${showMaterial ? "" : "hide"} `}>

            {/* ADD PRODUCT MATERIAL */}

            <div className="add-product">



              <Button variant="primary" className="add-product-btn" onClick={() => setModal2Show(true)}>
                ADD ITEM
              </Button>

              {/* ITEM CARD */}

              <MyVerticallyCenteredModal2
                show={modal2Show}
                onHide={() => setModal2Show(false)}
                addItem={setInputItem}
                item={inputItem}
                addItemFunction={() => addItemFunc()}
              />


            </div>
            <div className="material-product-name">
              <p>Product Name : {currentProduct.name}</p>
              <p>Product Tag : {currentProduct.tag}</p>
            </div>

            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                  </tr>
                </thead>
                <tbody>


                  {/* {addItem[productNumber].list.map((listitem,index)=>{
              return(
                <>
                <tr key={index} className="key">
                <td>
                  {index+1}
                  </td>

                <td >
            {listitem}
            </td>
        </tr>
</>
              )
            }) }
           */}


                </tbody>
              </Table>
            </div>

          </Col>
          <Col className={` products ${showMaterial ? "hide" : ""} `}>

            {/* ADD PRODUCT */}

            <div className="add-product">



              <Button variant="primary" className="add-product-btn" onClick={() => setModalShow(true)}>
                ADD PRODUCT
              </Button>

              {/* PRODUCT CARD */}

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                nameChange={setProductName}
                tagChange={setProductTag}
                name={productName}
                tag={productTag}
                addFunc={() => addProduct()}
              />



            </div>
            <ul className="products-list">
              {productList.map((product, index) => {
                return (
                  <li key={product.tag} >
                    <Card className="product-card">
                      <Card.Header className="product-number">Product {index + 1}</Card.Header>
                      <Card.Body >
                        <Card.Text className="product-tag">
                          Tag : {product.tag}
                        </Card.Text>
                        <div className="title-icon">

                          <Card.Title className="product-title">{product.name}</Card.Title>
                          <Card.Text className="product-icon">
                            <BsBag />
                          </Card.Text>
                        </div>

                        <Button className="product-btn" variant="warning" onClick={() => addMaterial(product, index)}>Add Material</Button>
                      </Card.Body>
                    </Card>
                  </li>
                )
              })}

            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
