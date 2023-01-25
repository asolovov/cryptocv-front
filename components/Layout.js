import styled from "styled-components";

const Layout = ({ header, leftBar, centralBar }) => {
    return (
        <div className={"container"}>
            <div className="card mb-3 mt-3">
                <div className="row g-0">

                    <div className="col-12 col-xl-3">
                        <ImgBox>
                            <Img src={'/av.jpg'}/>
                        </ImgBox>
                    </div>
                    <div className="col-12 col-xl-9 bg-indigo">
                        {header}
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12 col-lg-3"}>
                    {leftBar}
                </div>
                <div className={"col-12 col-lg-9"}>
                    {centralBar}
                </div>
            </div>
        </div>
    );
};

const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;

  @media screen and (max-width: 1400px) {
    height: 400px;
  }
`
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`


export default Layout;