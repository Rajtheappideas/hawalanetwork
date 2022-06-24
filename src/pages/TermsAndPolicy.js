import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";

const TermsAndPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Terms and policy</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-2xl sm:text-5xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Terms and Policy
        </h1>
      </div>
      <div className="sm:p-10 p-3 space-y-5">
        <h1 className="text-xl font-semibold">Welcome to Project</h1>
        <p className="w-full text-gray-600">
          Quisque est nisi, eleifend tristique congue non, sagittis quis justo.
          In blandit hendrerit magna, sit amet ullamcorper sapien. Suspendisse
          potenti. Vivamus eu lacus ut nulla dapibus malesuada nec et libero. Ut
          ultrices risus id eleifend sagittis.
        </p>
        <p className="text-xl font-semibold">What are Terms and Conditions</p>
        <p className="w-full text-gray-600">
          Sed non dui aliquam, ullamcorper est non, aliquet mauris. Quisque
          lacus ligula, dapibus nec dignissim non, tincidunt vel quam. Etiam
          porttitor iaculis odio.
        </p>
        <p className="w-full text-gray-600">
          Cras sagittis nunc lectus, in condimentum ligula ornare at. Etiam
          sagittis malesuada nisl. Duis volutpat ligula ante. Sed cursus, tortor
          a pellentesque pulvinar, lorem ipsum gravida elit, id posuere elit
          neque in est. Mauris ex justo, tincidunt at suscipit quis, pretium a
          mi.
        </p>
        <p className="w-full text-gray-600">
          Quisque consequat nisl nulla, dignissim gravida ipsum ultrices et.
          Morbi pharetra non massa at cursus. Vivarnus convallis dui eu nisl
          blandit, vel convallis nisi dapibus.
        </p>
        <p className="text-xl font-semibold sm:ml-16 ml-6">
          A. What to include in a Terms and Conditions
        </p>
        <p className="text-gray-600 sm:ml-16 ml-6">
          tiam rhoncus quis eros eget fringilla. Etiam malesuada enim laoreet
          nibh euismod, eu finibus elit finibus. Duis ornare tempus purus. Nam
          at leo quis tortor congue dignissim.
        </p>
        <p className=" text-gray-600 sm:ml-16 ml-6">
          Sed non varius erat. Nulla vel nibh eu risus cursus vulputate nec ac
          elit.
        </p>
        <p className="text-xl font-semibold sm:ml-16 ml-6">
          B. ls a Terms and Conditions required?
        </p>
        <p className=" text-gray-600 sm:ml-16 ml-6">
          roin efficitur vestibulum molestie. Nam urna justo, ornare commodo sem
          eget, pretium lobortis nisi. Curabitur ac felis pharetra nunc molestie
          semper quis eu mauris
        </p>
        <p className=" text-gray-600 sm:ml-16 ml-6">
          Aliquam mollis, arcu in blandit cursus, lacus est aliquam dui, vitae
          suscipit orci massa suscipit metus. Duis faucibus, lorem eget rutrum
          dictum, arcu erat elementum metus, id rutrum mauris mi ut sapien.
          Mauris in facilisis ante. Integer sed ante tristique augue eleifend
          eleifend sed tristique tellus. Vestibulum vehicula nisi eget ipsum
          sollicitudin porttitor.
        </p>
        <p className="text-xl font-semibold">
          2. Examples of Terms and Conditions{" "}
        </p>
        <p className="w-full text-gray-600">
          Proin commodo aliquam elit eu dignissim. Pellentesque id maximus elit.
          Nunc ultrices rutrum odio, ut pulvinar erat ultrices vitae. Nunc nec
          odio eget lacus vehicula suscipit ac in elit. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Integer sit amet tincidunt
          ante.
        </p>
        <p className="w-full text-gray-600">
          Aliquam scelerisque dictum tortor, nec tristique augue luctus at.
          Nulla vel bibendum eros. Ut efficitur, sapien ac maximus fringilla,
          erat nunc aliquam dui, auctor commodo lacus ipsum ac sapien. Nullam a
          ex vitae tellus congue consectetur consequat non velit.
        </p>
        <p className="w-full text-gray-600">
          Maecenas lobortis sapien eget tellus blandit congue. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nam gravida commodo
          justo, ut fermentum sapien lobortis et.
        </p>
        <p className="text-xl font-semibold">
          3. Your content in our services{" "}
        </p>
        <p className="w-full text-gray-600">
          Integer vel dictum felis, vitae gravida sem. Suspendisse quis auctor
          nibh. Quisque accumsan lectus dictum, efficitur magna eu, malesuada
          lacus. Aliquam fermentum, justo eget consequat maximus, nunc purus
          posuere ex, ac scelerisque ante est nec nibh.
        </p>
        <p className="w-full text-gray-600">
          Morbi scelerisque imperdiet mi, in cursus tortor sollicitudin ac.
          Praesent eget congue augue. Mauris facilisis a arcu vitae dictum.
          Vivamus quis tellus ut urna commodo porttitor a vel magna.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndPolicy;
