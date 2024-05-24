
import React, { useState, useRef, useEffect, useContext } from "react"
import './stylesheets/Customize.css'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Stage, Layer, Image, Text, Rect, Transformer } from "react-konva";
import { downloadURI } from "./Utils/downloadURI";
import { IoChevronBackCircle } from "react-icons/io5";
import CommonContext from "./CommonContext";

const Customize = () => {
    const trRef = useRef();
    const stageRef = useRef();
    const [params] = useSearchParams();
    const pageRender = useNavigate();
    const [transformAttrs, setTransformAttrs] = useState({});
    const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [image, setImage] = useState(null);
    const [fontSize, setFontSize] = useState(20);
    const [fontColor, setFontColor] = useState("white");
    const [canvasWidth, setcanvasWidth] = useState(0);
    const [canvasHeight, setcanvasHeight] = useState(0);
    const {
        companyData, setCompanyData,
        whatsappNumber, setwhatsappNumber,
        businessAddress, setBusinessAddress,
        website, setwebsite,
        saveData,setSaveData
    }=useContext(CommonContext)



    useEffect(() => {
        var paramImg = params.get("a")
        if (paramImg) {
            console.log(paramImg);
            const img = new window.Image();
            img.src = paramImg;
            img.onload = () => {
                setImage(img);
            };
        }
    }, [params]);


    const handleEditing = (e) => {
        if (e.target.name === "CompanyName") {
            var name = { ...companyData }
            name.company_name = e.target.value
            setCompanyData(name)
        }
        else if (e.target.name === "CompanyToggle") {
            var nameToogle = { ...companyData }
            nameToogle.company_name_toggle = e.target.checked
            setCompanyData(nameToogle)
        }

        else if (e.target.name === "whatsAppNumber") {
            var whatsappnum = { ...whatsappNumber }
            whatsappnum.whatsapp_number = e.target.value
            setwhatsappNumber(whatsappnum)
        }
        else if (e.target.name === "whatsAppNumberToggle") {
            var whatsappnumToggle = { ...whatsappNumber }
            whatsappnumToggle.whatsapp_number_toggle = e.target.checked
            setwhatsappNumber(whatsappnumToggle)
        }

        else if (e.target.name === "Business address") {
            var businessAddressval = { ...businessAddress }
            businessAddressval.business_address = e.target.value
            setBusinessAddress(businessAddressval)
        }
        else if (e.target.name === "Business address toggle") {
            var businessAddressToggle = { ...businessAddress }
            businessAddressToggle.business_address_toggle = e.target.checked
            setBusinessAddress(businessAddressToggle)
        }

        else if (e.target.name === "Website") {
            var websiteDataval = { ...website }
            websiteDataval.website = e.target.value
            setwebsite(websiteDataval)
        }
        else if (e.target.name === "Website toggle") {
            var websiteToggle = { ...website }
            websiteToggle.website_toggle = e.target.checked
            setwebsite(websiteToggle)
        }
    }

    const handleReset = () => {
        setCompanyData({
            company_name: "",
            company_name_toggle: false
        })
        setwhatsappNumber({
            whatsapp_number: "",
            whatsapp_number_toggle: false
        })
        setBusinessAddress({
            business_address: "",
            business_address_toggle: false
        })
        setwebsite({
            website: "",
            website_toggle: false
        })
    }


    const handleDownload = () => {
        const dataURL = stageRef.current.toDataURL();
        downloadURI(dataURL, "canvas.png");
    };

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;


        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (getWindowDimensions().width < 300) {
            setcanvasWidth(150);
            setcanvasHeight(150);
        }
        else if (getWindowDimensions().width < 400) {
            setcanvasWidth(250);
            setcanvasHeight(250);
        }
        else if (getWindowDimensions().width > 400 && getWindowDimensions().width < 500) {
            setcanvasWidth(350);
            setcanvasHeight(300);
        }
        else if (getWindowDimensions().width > 500 && getWindowDimensions().width < 900) {
            setcanvasWidth(450);
            setcanvasHeight(400);
        }
        else if (getWindowDimensions().width > 900 && getWindowDimensions().width < 1200) {
            setcanvasWidth(500);
            setcanvasHeight(400);
        }
        else if (getWindowDimensions().width > 1200 && getWindowDimensions().width < 1400) {
            setcanvasWidth(550);
            setcanvasHeight(400);
        }
        else {
            setcanvasWidth(550);
            setcanvasHeight(400);
        }
    }, [windowDimensions])

    return (
        <>
            <section className="customize-page" >
                <div className="container pt-4">
                    <div className="upper-container">
                        <div className="container h-100">
                            <div className="pt-3">
                                <button className="btn btn-outline-secondary d-flex align-items-center gap-2 ms-1" onClick={() => {
                                    pageRender('/homepage')
                                }}>
                                    <IoChevronBackCircle className="fs-5" /> Back
                                </button>
                            </div>
                            <div class="card-container h-100 pt-3">
                                <div class="card border mb-4 mx-auto h-100">
                                    <Stage width={canvasWidth} height={canvasHeight} ref={stageRef} className="h-100 row align-items-center justify-content-center ">
                                        <Layer>

                                            <Image image={image} width={canvasWidth} height={canvasHeight} />

                                            <Rect
                                                fill="transparent"
                                                draggable
                                                onMouseDown={(e) => {
                                                    setSelectedShapeIndex(null);
                                                    setEditMode(false);
                                                }}
                                            />

                                            {
                                                companyData.company_name_toggle===false ?
                                                    null
                                                    :
                                                    <>
                                                        <Text
                                                            text={saveData ? companyData.company_name : ""}
                                                            fontSize={fontSize}
                                                            fill={fontColor}
                                                            x={50}
                                                            y={50}
                                                            draggable
                                                            visible={!editMode}
                                                            className="textHover"
                                                            onMouseEnter={(e) => {
                                                                e.target.getStage().container().style.cursor = 'move';
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.getStage().container().style.cursor = 'default';
                                                                e.target.fill(fontColor);
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                        />
                                                        <Transformer
                                                            ref={trRef}
                                                            selectedShapeIndex={selectedShapeIndex}
                                                            anchorFill="#ffffff"
                                                            borderStroke="#0099FF"
                                                            borderDash={[6, 2]}
                                                            borderStrokeWidth={2}
                                                            keepRatio={false}
                                                            rotateEnabled={true}
                                                            enabledAnchors={[
                                                                "middle-left",
                                                                "middle-right",
                                                                "bottom-center",
                                                            ]}
                                                            rotateAnchorOffset={20}
                                                            borderEnabled={true}
                                                            onTransform={(e) => {
                                                                const nodes = trRef.current.nodes();
                                                                if (nodes.length === 1) {
                                                                    const selectedNode = nodes[0];
                                                                    setTransformAttrs({
                                                                        x: selectedNode.x(),
                                                                        y: selectedNode.y(),
                                                                        rotation: selectedNode.rotation(),
                                                                        scaleX: selectedNode.scaleX(),
                                                                        scaleY: selectedNode.scaleY(),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                    </>

                                            }


                                            {
                                                whatsappNumber.whatsapp_number_toggle===false ?
                                                    null
                                                    :
                                                    <>
                                                        <Text
                                                            text={saveData ? whatsappNumber.whatsapp_number : ""}
                                                            fontSize={fontSize}
                                                            fill={fontColor}
                                                            x={50}
                                                            y={100}
                                                            draggable
                                                            visible={!editMode}
                                                            className="textHover"
                                                            onMouseEnter={(e) => {
                                                                e.target.getStage().container().style.cursor = 'move';
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.getStage().container().style.cursor = 'default';
                                                                e.target.fill(fontColor);
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                        />
                                                        <Transformer
                                                            ref={trRef}
                                                            selectedShapeIndex={selectedShapeIndex}
                                                            anchorFill="#ffffff"
                                                            borderStroke="#0099FF"
                                                            borderDash={[6, 2]}
                                                            borderStrokeWidth={2}
                                                            keepRatio={false}
                                                            rotateEnabled={true}
                                                            enabledAnchors={[
                                                                "middle-left",
                                                                "middle-right",
                                                                "bottom-center",
                                                            ]}
                                                            rotateAnchorOffset={20}
                                                            borderEnabled={true}
                                                            onTransform={(e) => {
                                                                const nodes = trRef.current.nodes();
                                                                if (nodes.length === 1) {
                                                                    const selectedNode = nodes[0];
                                                                    setTransformAttrs({
                                                                        x: selectedNode.x(),
                                                                        y: selectedNode.y(),
                                                                        rotation: selectedNode.rotation(),
                                                                        scaleX: selectedNode.scaleX(),
                                                                        scaleY: selectedNode.scaleY(),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                    </>
                                            }


                                            {
                                                businessAddress.business_address_toggle===false ?

                                                    null
                                                    :
                                                    <>
                                                        <Text
                                                            text={saveData ? businessAddress.business_address : ""}
                                                            fontSize={fontSize}
                                                            // fontFamily={fontFamily}
                                                            fill={fontColor}
                                                            // fontStyle={fontWeight}
                                                            x={50}
                                                            y={150}
                                                            draggable
                                                            visible={!editMode}
                                                            className="textHover"
                                                            onMouseEnter={(e) => {
                                                                e.target.getStage().container().style.cursor = 'move';
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.getStage().container().style.cursor = 'default';
                                                                e.target.fill(fontColor);
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                        />
                                                        <Transformer
                                                            ref={trRef}
                                                            selectedShapeIndex={selectedShapeIndex}
                                                            anchorFill="#ffffff"
                                                            borderStroke="#0099FF"
                                                            borderDash={[6, 2]}
                                                            borderStrokeWidth={2}
                                                            keepRatio={false}
                                                            rotateEnabled={true}
                                                            enabledAnchors={[
                                                                "middle-left",
                                                                "middle-right",
                                                                "bottom-center",
                                                            ]}
                                                            rotateAnchorOffset={20}
                                                            borderEnabled={true}
                                                            onTransform={(e) => {
                                                                const nodes = trRef.current.nodes();
                                                                if (nodes.length === 1) {
                                                                    const selectedNode = nodes[0];
                                                                    setTransformAttrs({
                                                                        x: selectedNode.x(),
                                                                        y: selectedNode.y(),
                                                                        rotation: selectedNode.rotation(),
                                                                        scaleX: selectedNode.scaleX(),
                                                                        scaleY: selectedNode.scaleY(),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                    </>
                                            }


                                            {
                                                website.website_toggle===false ?
                                                    null
                                                    :
                                                    <>
                                                        <Text
                                                            text={saveData ? website.website:""}
                                                            fontSize={fontSize}
                                                            // fontFamily={fontFamily}
                                                            fill={fontColor}
                                                            // fontStyle={fontWeight}
                                                            x={50}
                                                            y={200}
                                                            draggable
                                                            visible={!editMode}
                                                            className="textHover"
                                                            onMouseEnter={(e) => {
                                                                e.target.getStage().container().style.cursor = 'move';
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.getStage().container().style.cursor = 'default';
                                                                e.target.fill(fontColor);
                                                                e.target.getLayer().batchDraw();
                                                            }}
                                                        />
                                                        <Transformer
                                                            ref={trRef}
                                                            selectedShapeIndex={selectedShapeIndex}
                                                            anchorFill="#ffffff"
                                                            borderStroke="#0099FF"
                                                            borderDash={[6, 2]}
                                                            borderStrokeWidth={2}
                                                            keepRatio={false}
                                                            rotateEnabled={true}
                                                            enabledAnchors={[
                                                                "middle-left",
                                                                "middle-right",
                                                                "bottom-center",
                                                            ]}
                                                            rotateAnchorOffset={20}
                                                            borderEnabled={true}
                                                            onTransform={(e) => {
                                                                const nodes = trRef.current.nodes();
                                                                if (nodes.length === 1) {
                                                                    const selectedNode = nodes[0];
                                                                    setTransformAttrs({
                                                                        x: selectedNode.x(),
                                                                        y: selectedNode.y(),
                                                                        rotation: selectedNode.rotation(),
                                                                        scaleX: selectedNode.scaleX(),
                                                                        scaleY: selectedNode.scaleY(),
                                                                    });
                                                                }
                                                            }}
                                                        />
                                                    </>
                                            }

                                        </Layer>
                                    </Stage>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="lower-container d-flex align-items-center justify-content-center flex-column gap-3">
                        <div className="button-container col-12 row">
                            <div className="col-3">
                                <button type='button' className="btn brand-color w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                            </div>
                            <div className="col-3">
                                <input type='number' className="w-100 h-100 text-center rounded-2" placeholder="font size" value={fontSize} min={"20"} onChange={(e) => setFontSize(e.target.value)} />
                            </div>
                            <div className="col-3">
                                <input type='color' className="w-100 h-100 " onChange={(e) => setFontColor(e.target.value)} />
                            </div>
                            <div className="col-3">
                                <button type='button' className="btn brand-color w-100" onClick={handleReset}>Clear</button>
                            </div>
                        </div>
                        <div className="button-container w-100">
                            {/* <Link to="/edit-whatsapp" className='text-decoration-none'> */}
                            <button className="btn btn-outline-brand-color w-100 " onClick={handleDownload}>Download</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="container">
                                    <div className="details-container">
                                        <form className=''>
                                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                                <div className='w-100 me-3'>
                                                    <input type="text" class="form-control" id="CompanyName" placeholder='Company name' aria-describedby="CompanyName" name="CompanyName" value={companyData.company_name} onChange={handleEditing} />
                                                </div>
                                                <div className='toggle-switch-container'>
                                                    <label class="switch">
                                                        <input type="checkbox" name="CompanyToggle" onChange={handleEditing} checked={companyData.company_name_toggle}/>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                                <div className='w-100 me-3'>
                                                    <input type="number" class="form-control" id="whatsAppNumber"  placeholder='Whatsapp number' aria-describedby="whatsAppNumber" name="whatsAppNumber" value={whatsappNumber.whatsapp_number} onChange={handleEditing} />
                                                </div>
                                                <div className='toggle-switch-container'>
                                                    <label class="switch">
                                                        <input type="checkbox" name="whatsAppNumberToggle" onChange={handleEditing} checked={whatsappNumber.whatsapp_number_toggle}/>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                                <div className='w-100 me-3'>
                                                    <textarea rows={3} className='form-control' id="businessAddress" placeholder='Business address' value={businessAddress.business_address} name="Business address" onChange={handleEditing}></textarea>
                                                </div>
                                                <div className='toggle-switch-container'>
                                                    <label class="switch">
                                                        <input type="checkbox" name="Business address toggle" onChange={handleEditing} checked={businessAddress.business_address_toggle}/>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="mb-3 d-flex justify-content-between align-items-center">
                                                <div className='w-100 me-3'>
                                                    <input type="text" class="form-control" id="website" placeholder='Website' aria-describedby="website" value={website.website} name="Website" onChange={handleEditing} />
                                                </div>
                                                <div className='toggle-switch-container'>
                                                    <label class="switch">
                                                        <input type="checkbox" name="Website toggle" onChange={handleEditing} checked={website.website_toggle}/>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div class="modal-footer row border-0">
                                <div className="col">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                <div className="col">
                                    {/* <div className="lower-container d-flex align-items-center">
                                        <div className="button-container my-auto mx-auto w-100"> */}
                                    {/* <Link to="/share-on-whatsapp" className='text-decoration-none'> */}
                                    <button type="button" className="btn btn-teal-dark-green w-100" data-bs-dismiss="modal" onClick={()=>setSaveData(true)}>Save</button>
                                    {/* </Link> */}
                                    {/* </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customize

