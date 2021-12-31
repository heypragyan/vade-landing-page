import Image from "next/image";
import React from "react";
import integrationGif from "../assets/Assets/Gifs/1. Add Integrations.gif";
import configureGif from "../assets/Assets/Gifs/2. Edit Integrations.gif";
import testGif from "../assets/Assets/Gifs/3. Test.gif";
import configPng from "../assets/Assets/Images/configc_.png";
import deployPng from "../assets/Assets/Images/deployc_.png";

const CruiseThroughBackend = () => {
  return (
    <div
      className="pt-20 mt-16 px-6 md:px-12 box-border max-w-5xl m-auto"
      id="cruise-through-backend"
    >
      <h1 className="font-bold text-5xl md:text-6xl pb-28">
        <span className="text-[#8B12FC]">Cruise </span>
        Through Backend
      </h1>
      <StepOne />
      <div className="h-64 md:h-48 relative">
        <CurveTop className="h-48 hidden md:block absolute right-1/2 transform translate-x-1/2 scale-125" />
        <MobileConnector className="h-full block md:hidden absolute right-1/2 transform translate-x-1/2 scale-150" />
        <div className="absolute h-20 w-28 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 my-2">
          <Image src={configPng} alt="Illustration"/>
        </div>
      </div>
      <StepTwo />
      <div className="h-64 md:h-48 relative">
        <CurveBottom className="h-48 hidden md:block absolute right-1/2 transform translate-x-1/2 scale-125" />
        <MobileConnector className="h-full block md:hidden absolute right-1/2 transform translate-x-1/2 scale-150" />

        <div className="absolute h-24 w-24 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={deployPng}  alt="Illustration"/>
        </div>
      </div>
      <StepThree />
    </div>
  );
};

export default CruiseThroughBackend;

const StepOne = () => {
  const loader = () => {
    return "https://www.incredible-web.com/media/1087/ajax_loaders.png";
  };

  return (
    <div className="flex flex-col md:flex-row space-around relative text-left">
      <div className="w-full p-8 z-0">
        <h1 className="text-9xl text-gray-300 font-bold absolute -top-16 left-0 z-[-1]">
          #1
        </h1>
        <h1 className="font-semibold text-3xl w-3/4 z-20 text-black">
          Choose from 100+ integrations.
        </h1>
        <p className="my-5 text-gray-500">
          Vade Studio is designed to work seamlessly with your favourite
          databases or web services.
          <strong className="text-gray-700">
            {" "}
            Tweak a template or start from scratch.
          </strong>
          <br />
          <br />
          We&apos;ve baked-in over 100 integrations directly into the platform,
          so you can integrate quickly and easily with other services, databases
          and applications out there.
        </p>
      </div>
      <div className="w-full p-4">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-[#8B12FC]">
          <Image src={integrationGif} alt="Integration Animation" />
        </div>
      </div>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse space-around relative text-left md:text-right">
      <div className="w-full p-8 z-0">
        <h1 className="text-9xl text-gray-300 font-bold absolute -top-16 left-0 md:right-0 z-[-1]">
          #2
        </h1>
        <h1 className="font-semibold text-3xl w-3/4 md:ml-auto z-20 text-black">
          Configure & Connect.
        </h1>
        <p className="my-5 text-gray-500">
          Get all of your
          <strong className="text-gray-700">
            {" "}
            data sources connected into a content mesh, in the same place, in
            real time.
          </strong>
          <br />
          <br />
          This provides you a unified API for data navigation across all your
          integrated services.
        </p>
      </div>
      <div className="w-full p-4">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-[#8B12FC]">
          <Image src={configureGif} alt="Configuration Animation" />
        </div>
      </div>
    </div>
  );
};

const StepThree = () => {
  return (
    <div className="flex flex-col md:flex-row space-around relative text-left">
      <div className="w-full p-8 z-0">
        <h1 className="text-9xl text-gray-300 font-bold absolute -top-16 left-0 z-[-1]">
          #3
        </h1>
        <h1 className="font-semibold text-3xl w-3/4 z-20 text-black">
          Test. Build. Deploy.
        </h1>
        <p className="my-5 text-gray-500">
          <strong className="text-gray-700">
            {" "}
            Play around with the generated APIs.
          </strong>
          <br />
          <br />
          Once configured – test, build and deploy the unified API into our
          secure and reliable infrastructure.
        </p>
      </div>
      <div className="w-full p-4">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-[#8B12FC]">
          <Image src={testGif} alt="Testing Animation" />
        </div>
      </div>
    </div>
  );
};

const CurveTop = ({ className }: { className?: string }) => {
  return (
    <svg
      width="500"
      height="304"
      className={className}
      viewBox="0 0 500 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.94932 3.3653C7.59879 1.18415 5.54646 -0.299857 3.3653 0.0506759C1.18415 0.401209 -0.299857 2.45354 0.0506759 4.6347L7.94932 3.3653ZM84 138L86.3392 134.755L86.3392 134.755L84 138ZM375 195L376.506 191.294L376.506 191.294L375 195ZM492.109 302.122C493.281 303.995 495.749 304.563 497.622 303.391C499.495 302.219 500.063 299.751 498.891 297.878L492.109 302.122ZM0.243416 5.73462C0.641638 7.90757 2.72599 9.34627 4.89894 8.94805C7.07189 8.54983 8.51059 6.46548 8.11237 4.29253L0.243416 5.73462ZM12.9681 23.9939C12.3413 21.8756 10.1159 20.6664 7.99752 21.2932C5.87917 21.92 4.67003 24.1454 5.29683 26.2638L12.9681 23.9939ZM5.89572 28.258C6.53969 30.3712 8.77482 31.5622 10.888 30.9182C13.0012 30.2743 14.1922 28.0391 13.5483 25.9259L5.89572 28.258ZM20.2781 45.2045C19.4676 43.1495 17.1445 42.1406 15.0895 42.9511C13.0344 43.7617 12.0255 46.0847 12.836 48.1398L20.2781 45.2045ZM13.6207 50.106C14.4478 52.1544 16.7788 53.1446 18.8273 52.3175C20.8758 51.4904 21.8659 49.1593 21.0389 47.1109L13.6207 50.106ZM29.4382 65.6875C28.4446 63.7144 26.0396 62.9204 24.0665 63.914C22.0935 64.9077 21.2995 67.3126 22.2931 69.2857L29.4382 65.6875ZM23.2561 71.1774C24.2668 73.1417 26.6786 73.9148 28.643 72.904C30.6073 71.8933 31.3803 69.4815 30.3696 67.5171L23.2561 71.1774ZM40.4812 85.1777C39.2959 83.3135 36.8238 82.763 34.9596 83.9482C33.0953 85.1334 32.5448 87.6055 33.73 89.4698L40.4812 85.1777ZM34.87 91.2441C36.0731 93.0969 38.5504 93.6236 40.4032 92.4205C42.256 91.2174 42.7827 88.7401 41.5796 86.8873L34.87 91.2441ZM53.4846 103.351C52.0988 101.63 49.5807 101.359 47.8603 102.745C46.1398 104.13 45.8685 106.649 47.2543 108.369L53.4846 103.351ZM48.596 110.016C50.0003 111.722 52.5212 111.966 54.2265 110.561C55.9318 109.157 56.1758 106.636 54.7715 104.931L48.596 110.016ZM68.5084 119.824C66.9191 118.289 64.3868 118.334 62.8525 119.923C61.3181 121.513 61.3627 124.045 62.9521 125.579L68.5084 119.824ZM64.4895 127.046C66.0971 128.561 68.6287 128.486 70.1438 126.878C71.659 125.271 71.584 122.739 69.9763 121.224L64.4895 127.046ZM85.5158 134.158C83.7322 132.854 81.2296 133.243 79.9262 135.027C78.6227 136.811 79.012 139.313 80.7956 140.617L85.5158 134.158ZM82.4837 141.835C84.2828 143.117 86.7805 142.698 88.0626 140.899C89.3448 139.1 88.9258 136.602 87.1268 135.32L82.4837 141.835ZM103.235 145.511C101.304 144.437 98.8688 145.131 97.7947 147.061C96.7205 148.992 97.4147 151.427 99.3451 152.501L103.235 145.511ZM101.11 153.47C103.052 154.522 105.48 153.799 106.532 151.857C107.583 149.914 106.861 147.487 104.919 146.435L101.11 153.47ZM122.161 154.526C120.111 153.703 117.782 154.698 116.959 156.749C116.136 158.799 117.132 161.128 119.182 161.95L122.161 154.526ZM121.039 162.684C123.099 163.483 125.416 162.462 126.216 160.402C127.015 158.343 125.994 156.025 123.935 155.226L121.039 162.684ZM142.065 161.148C139.932 160.574 137.737 161.837 137.162 163.97C136.588 166.103 137.851 168.298 139.984 168.873L142.065 161.148ZM141.905 169.38C144.044 169.933 146.226 168.648 146.78 166.51C147.333 164.371 146.048 162.188 143.909 161.635L141.905 169.38ZM162.656 165.563C160.476 165.204 158.418 166.681 158.06 168.86C157.701 171.04 159.177 173.098 161.357 173.457L162.656 165.563ZM163.316 173.771C165.498 174.112 167.544 172.62 167.886 170.437C168.227 168.254 166.734 166.208 164.552 165.867L163.316 173.771ZM183.658 168.163C181.458 167.969 179.517 169.596 179.323 171.797C179.13 173.998 180.757 175.938 182.958 176.132L183.658 168.163ZM184.927 176.3C187.128 176.481 189.06 174.843 189.241 172.641C189.423 170.44 187.785 168.508 185.583 168.327L184.927 176.3ZM204.896 169.461C202.688 169.375 200.829 171.095 200.744 173.303C200.658 175.51 202.378 177.369 204.585 177.455L204.896 169.461ZM206.545 177.528C208.753 177.607 210.606 175.881 210.685 173.673C210.764 171.465 209.038 169.612 206.83 169.533L206.545 177.528ZM226.262 169.998C224.053 169.964 222.235 171.726 222.2 173.935C222.166 176.144 223.929 177.963 226.137 177.997L226.262 169.998ZM228.093 178.027C230.302 178.059 232.119 176.295 232.152 174.086C232.184 171.877 230.42 170.06 228.211 170.027L228.093 178.027ZM247.736 170.297C245.527 170.262 243.708 172.024 243.672 174.233C243.636 176.441 245.398 178.261 247.607 178.296L247.736 170.297ZM249.559 178.329C251.768 178.367 253.589 176.607 253.627 174.398C253.665 172.19 251.906 170.368 249.697 170.33L249.559 178.329ZM269.292 170.847C267.084 170.762 265.226 172.483 265.141 174.691C265.057 176.898 266.778 178.756 268.985 178.841L269.292 170.847ZM270.919 178.918C273.127 179.009 274.99 177.294 275.081 175.087C275.173 172.879 273.457 171.016 271.25 170.925L270.919 178.918ZM290.887 172.095C288.685 171.918 286.757 173.559 286.58 175.761C286.403 177.963 288.044 179.892 290.246 180.069L290.887 172.095ZM292.172 180.228C294.374 180.416 296.31 178.783 296.497 176.582C296.684 174.381 295.052 172.444 292.851 172.257L292.172 180.228ZM312.462 174.443C310.274 174.136 308.252 175.661 307.946 177.849C307.639 180.037 309.164 182.059 311.352 182.366L312.462 174.443ZM313.264 182.639C315.45 182.959 317.481 181.447 317.801 179.261C318.121 177.075 316.608 175.044 314.423 174.724L313.264 182.639ZM333.891 178.226C331.731 177.761 329.603 179.134 329.138 181.294C328.673 183.453 330.046 185.581 332.206 186.046L333.891 178.226ZM334.094 186.46C336.251 186.941 338.388 185.583 338.869 183.427C339.35 181.271 337.992 179.133 335.836 178.652L334.094 186.46ZM354.997 183.68C352.883 183.038 350.649 184.232 350.008 186.345C349.366 188.459 350.559 190.693 352.673 191.335L354.997 183.68ZM354.512 191.901C356.621 192.559 358.864 191.384 359.522 189.275C360.18 187.166 359.005 184.923 356.896 184.265L354.512 191.901ZM375.577 190.919C373.527 190.095 371.197 191.089 370.374 193.139C369.55 195.189 370.544 197.518 372.594 198.342L375.577 190.919ZM374.449 199.097C376.49 199.941 378.829 198.969 379.673 196.928C380.517 194.886 379.546 192.547 377.504 191.703L374.449 199.097ZM396.861 200.98C394.922 199.922 392.492 200.636 391.434 202.575C390.376 204.514 391.09 206.944 393.029 208.002L396.861 200.98ZM394.841 209.003C396.769 210.081 399.206 209.391 400.284 207.463C401.362 205.534 400.672 203.097 398.743 202.02L394.841 209.003ZM416.919 213.336C415.098 212.085 412.608 212.547 411.357 214.367C410.106 216.188 410.567 218.678 412.388 219.929L416.919 213.336ZM414.092 221.111C415.902 222.378 418.396 221.938 419.663 220.128C420.929 218.318 420.489 215.824 418.679 214.557L414.092 221.111ZM435.669 227.511C433.966 226.104 431.444 226.344 430.038 228.047C428.631 229.751 428.871 232.272 430.574 233.679L435.669 227.511ZM432.164 235.002C433.856 236.421 436.379 236.2 437.799 234.507C439.218 232.815 438.997 230.292 437.304 228.872L432.164 235.002ZM453.143 243.143C451.553 241.609 449.021 241.654 447.487 243.243C445.953 244.833 445.998 247.365 447.587 248.899L453.143 243.143ZM449.089 250.358C450.668 251.903 453.201 251.875 454.745 250.295C456.29 248.716 456.262 246.183 454.682 244.639L449.089 250.358ZM469.413 259.997C467.935 258.355 465.405 258.224 463.764 259.702C462.123 261.181 461.991 263.71 463.47 265.351L469.413 259.997ZM464.871 266.917C466.34 268.567 468.868 268.715 470.519 267.246C472.169 265.777 472.316 263.249 470.848 261.599L464.871 266.917ZM484.514 277.934C483.15 276.197 480.635 275.895 478.898 277.26C477.161 278.625 476.859 281.139 478.223 282.876L484.514 277.934ZM479.491 284.5C480.845 286.246 483.357 286.564 485.103 285.21C486.849 283.856 487.167 281.344 485.813 279.598L479.491 284.5ZM498.289 296.94C497.085 295.088 494.607 294.563 492.755 295.767C490.903 296.972 490.378 299.449 491.582 301.301L498.289 296.94ZM4 4C0.0506759 4.6347 0.0506891 4.63478 0.0507025 4.63486C0.0507073 4.63489 0.0507209 4.63498 0.0507305 4.63504C0.0507495 4.63515 0.0507694 4.63528 0.0507902 4.63541C0.0508318 4.63567 0.0508768 4.63595 0.0509253 4.63625C0.0510222 4.63685 0.051133 4.63754 0.0512577 4.63831C0.051507 4.63985 0.0518118 4.64174 0.0521724 4.64396C0.0528935 4.64841 0.0538377 4.65422 0.0550075 4.66138C0.057347 4.6757 0.0605887 4.69541 0.0647519 4.72047C0.0730782 4.77058 0.085091 4.84205 0.100945 4.93438C0.132653 5.11903 0.17973 5.38711 0.243416 5.73462L8.11237 4.29253C8.05418 3.97501 8.01231 3.73631 7.98554 3.58043C7.97215 3.50249 7.96255 3.44525 7.95656 3.40923C7.95357 3.39122 7.95148 3.37851 7.95028 3.37117C7.94968 3.3675 7.9493 3.36517 7.94915 3.36419C7.94907 3.3637 7.94904 3.36355 7.94907 3.36373C7.94909 3.36382 7.94911 3.364 7.94916 3.36426C7.94918 3.3644 7.9492 3.36455 7.94923 3.36472C7.94924 3.36481 7.94926 3.3649 7.94927 3.365C7.94928 3.36505 7.94929 3.36512 7.9493 3.36515C7.94931 3.36522 7.94932 3.3653 4 4ZM5.29683 26.2638C5.49014 26.9171 5.68972 27.582 5.89572 28.258L13.5483 25.9259C13.3487 25.2709 13.1553 24.6268 12.9681 23.9939L5.29683 26.2638ZM12.836 48.1398C13.0929 48.7909 13.3544 49.4464 13.6207 50.106L21.0389 47.1109C20.7807 46.4714 20.5271 45.8359 20.2781 45.2045L12.836 48.1398ZM22.2931 69.2857C22.6099 69.9147 22.9308 70.5454 23.2561 71.1774L30.3696 67.5171C30.0551 66.9059 29.7446 66.296 29.4382 65.6875L22.2931 69.2857ZM33.73 89.4698C34.1061 90.0613 34.486 90.6528 34.87 91.2441L41.5796 86.8873C41.2097 86.3176 40.8436 85.7478 40.4812 85.1777L33.73 89.4698ZM47.2543 108.369C47.6975 108.919 48.1447 109.469 48.596 110.016L54.7715 104.931C54.3388 104.405 53.9098 103.879 53.4846 103.351L47.2543 108.369ZM62.9521 125.579C63.4606 126.07 63.973 126.559 64.4895 127.046L69.9763 121.224C69.4833 120.759 68.9941 120.292 68.5084 119.824L62.9521 125.579ZM80.7956 140.617C81.083 140.827 81.3714 141.036 81.6608 141.245L86.3392 134.755C86.0638 134.557 85.7894 134.358 85.5158 134.158L80.7956 140.617ZM81.6608 141.245C81.935 141.442 82.2094 141.639 82.4837 141.835L87.1268 135.32C86.8642 135.133 86.6016 134.944 86.3392 134.755L81.6608 141.245ZM99.3451 152.501C99.933 152.828 100.521 153.151 101.11 153.47L104.919 146.435C104.357 146.131 103.796 145.823 103.235 145.511L99.3451 152.501ZM119.182 161.95C119.801 162.199 120.42 162.443 121.039 162.684L123.935 155.226C123.343 154.996 122.752 154.763 122.161 154.526L119.182 161.95ZM139.984 168.873C140.624 169.045 141.264 169.214 141.905 169.38L143.909 161.635C143.294 161.476 142.679 161.314 142.065 161.148L139.984 168.873ZM161.357 173.457C162.01 173.564 162.663 173.669 163.316 173.771L164.552 165.867C163.919 165.768 163.287 165.667 162.656 165.563L161.357 173.457ZM182.958 176.132C183.614 176.19 184.27 176.245 184.927 176.3L185.583 168.327C184.941 168.274 184.299 168.219 183.658 168.163L182.958 176.132ZM204.585 177.455C205.238 177.48 205.891 177.504 206.545 177.528L206.83 169.533C206.185 169.51 205.54 169.486 204.896 169.461L204.585 177.455ZM226.137 177.997C226.789 178.007 227.441 178.017 228.093 178.027L228.211 170.027C227.561 170.018 226.911 170.008 226.262 169.998L226.137 177.997ZM247.607 178.296C248.257 178.307 248.908 178.318 249.559 178.329L249.697 170.33C249.043 170.319 248.389 170.308 247.736 170.297L247.607 178.296ZM268.985 178.841C269.63 178.866 270.274 178.891 270.919 178.918L271.25 170.925C270.597 170.898 269.944 170.872 269.292 170.847L268.985 178.841ZM290.246 180.069C290.888 180.12 291.53 180.174 292.172 180.228L292.851 172.257C292.196 172.201 291.541 172.147 290.887 172.095L290.246 180.069ZM311.352 182.366C311.989 182.455 312.626 182.546 313.264 182.639L314.423 174.724C313.769 174.628 313.115 174.534 312.462 174.443L311.352 182.366ZM332.206 186.046C332.835 186.182 333.465 186.32 334.094 186.46L335.836 178.652C335.187 178.507 334.539 178.365 333.891 178.226L332.206 186.046ZM352.673 191.335C353.286 191.521 353.899 191.71 354.512 191.901L356.896 184.265C356.263 184.067 355.63 183.872 354.997 183.68L352.673 191.335ZM372.594 198.342C372.894 198.462 373.194 198.584 373.494 198.706L376.506 191.294C376.196 191.168 375.886 191.043 375.577 190.919L372.594 198.342ZM373.494 198.706C373.812 198.835 374.131 198.966 374.449 199.097L377.504 191.703C377.172 191.566 376.839 191.43 376.506 191.294L373.494 198.706ZM393.029 208.002C393.635 208.333 394.239 208.667 394.841 209.003L398.743 202.02C398.118 201.67 397.491 201.324 396.861 200.98L393.029 208.002ZM412.388 219.929C412.958 220.322 413.526 220.716 414.092 221.111L418.679 214.557C418.095 214.149 417.508 213.742 416.919 213.336L412.388 219.929ZM430.574 233.679C431.107 234.119 431.637 234.56 432.164 235.002L437.304 228.872C436.762 228.418 436.217 227.964 435.669 227.511L430.574 233.679ZM447.587 248.899C448.092 249.386 448.592 249.872 449.089 250.358L454.682 244.639C454.173 244.141 453.66 243.642 453.143 243.143L447.587 248.899ZM463.47 265.351C463.942 265.876 464.41 266.398 464.871 266.917L470.848 261.599C470.375 261.068 469.897 260.533 469.413 259.997L463.47 265.351ZM478.223 282.876C478.655 283.426 479.078 283.968 479.491 284.5L485.813 279.598C485.39 279.052 484.957 278.498 484.514 277.934L478.223 282.876ZM491.582 301.301C491.763 301.579 491.898 301.789 491.986 301.927C492.03 301.996 492.062 302.047 492.083 302.08C492.093 302.096 492.1 302.108 492.105 302.115C492.107 302.119 492.109 302.121 492.109 302.122C492.11 302.123 492.11 302.123 492.11 302.123C492.11 302.123 492.11 302.123 492.11 302.123C492.11 302.123 492.11 302.123 492.11 302.122C492.11 302.122 492.109 302.122 492.109 302.122C492.109 302.122 492.109 302.122 492.109 302.122C492.109 302.122 492.109 302.122 495.5 300C498.891 297.878 498.891 297.878 498.891 297.878C498.891 297.878 498.891 297.878 498.891 297.878C498.891 297.878 498.89 297.878 498.89 297.877C498.89 297.877 498.89 297.877 498.89 297.877C498.89 297.876 498.889 297.876 498.889 297.875C498.888 297.874 498.887 297.873 498.886 297.871C498.884 297.867 498.881 297.863 498.877 297.857C498.87 297.845 498.86 297.828 498.846 297.807C498.82 297.765 498.781 297.704 498.731 297.626C498.63 297.468 498.483 297.238 498.289 296.94L491.582 301.301Z"
        fill="#EEEEEE"
      />
    </svg>
  );
};
const CurveBottom = ({ className }: { className?: string }) => {
  return (
    <svg
      width="520"
      className={className}
      height="317"
      viewBox="0 0 520 317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.94953 313.633C7.59972 315.815 5.54788 317.299 3.36661 316.95C1.18535 316.6 -0.299344 314.548 0.0504656 312.367L7.94953 313.633ZM87.3367 173.115L89.6792 176.357L89.6792 176.357L87.3367 173.115ZM390.474 113.611L391.983 117.316L390.474 113.611ZM512.607 1.88116C513.777 0.00740908 516.245 -0.562934 518.119 0.607262C519.993 1.77746 520.563 4.24506 519.393 6.11881L512.607 1.88116ZM0.221684 311.381C0.615348 309.207 2.69667 307.764 4.87046 308.158C7.04424 308.552 8.48731 310.633 8.09364 312.807L0.221684 311.381ZM12.399 294.785C11.7969 296.911 9.58568 298.145 7.46019 297.543C5.3347 296.941 4.0998 294.73 4.70197 292.604L12.399 294.785ZM5.23031 290.765C5.84794 288.644 8.06808 287.425 10.1891 288.043C12.3102 288.661 13.5289 290.881 12.9113 293.002L5.23031 290.765ZM18.754 275.293C17.9893 277.366 15.6892 278.426 13.6166 277.661C11.5441 276.896 10.4839 274.596 11.2487 272.524L18.754 275.293ZM11.9295 270.699C12.7088 268.631 15.0163 267.588 17.0834 268.367C19.1505 269.146 20.1945 271.454 19.4151 273.521L11.9295 270.699ZM26.5911 256.339C25.6676 258.346 23.2921 259.224 21.2852 258.301C19.2784 257.377 18.4001 255.002 19.3235 252.995L26.5911 256.339ZM20.1318 251.255C21.0698 249.255 23.4517 248.394 25.4517 249.332C27.4518 250.27 28.3128 252.652 27.3748 254.652L20.1318 251.255ZM35.9081 238.102C34.8209 240.025 32.3805 240.702 30.4575 239.615C28.5344 238.528 27.8569 236.087 28.9442 234.164L35.9081 238.102ZM29.9018 232.486C31.0044 230.572 33.4501 229.914 35.3644 231.017C37.2787 232.119 37.9367 234.565 36.8341 236.479L29.9018 232.486ZM46.7631 220.773C45.5044 222.588 43.0123 223.04 41.1968 221.781C39.3813 220.522 38.9299 218.03 40.1885 216.215L46.7631 220.773ZM41.2975 214.63C42.5721 212.826 45.0681 212.396 46.8724 213.671C48.6768 214.946 49.1062 217.442 47.8316 219.246L41.2975 214.63ZM59.2099 204.603C57.7739 206.282 55.2489 206.478 53.5701 205.043C51.8913 203.607 51.6945 201.082 53.1304 199.403L59.2099 204.603ZM54.3943 197.94C55.8465 196.275 58.3733 196.103 60.038 197.555C61.7028 199.007 61.875 201.534 60.4228 203.199L54.3943 197.94ZM73.2773 189.876C71.6634 191.385 69.1322 191.3 67.6237 189.686C66.1152 188.072 66.2005 185.541 67.8144 184.032L73.2773 189.876ZM69.2319 182.721C70.8616 181.23 73.3918 181.342 74.8832 182.972C76.3745 184.601 76.2623 187.132 74.6326 188.623L69.2319 182.721ZM88.9271 176.904C87.1437 178.208 84.6411 177.819 83.3372 176.036C82.0334 174.252 82.4221 171.75 84.2055 170.446L88.9271 176.904ZM85.8503 169.258C87.6481 167.974 90.1462 168.39 91.4302 170.188C92.7141 171.986 92.2976 174.484 90.4999 175.768L85.8503 169.258ZM107.287 165.124C105.358 166.2 102.921 165.508 101.845 163.579C100.769 161.649 101.461 159.213 103.391 158.137L107.287 165.124ZM105.227 157.127C107.168 156.073 109.596 156.793 110.65 158.735C111.704 160.677 110.984 163.105 109.042 164.159L105.227 157.127ZM127.015 155.705C124.966 156.529 122.636 155.536 121.812 153.487C120.987 151.437 121.98 149.107 124.03 148.283L127.015 155.705ZM125.963 147.518C128.022 146.717 130.34 147.737 131.141 149.795C131.942 151.854 130.923 154.172 128.864 154.974L125.963 147.518ZM147.765 148.784C145.633 149.36 143.437 148.098 142.861 145.966C142.285 143.833 143.547 141.637 145.68 141.061L147.765 148.784ZM147.679 140.532C149.817 139.977 152 141.261 152.555 143.399C153.11 145.538 151.826 147.721 149.687 148.276L147.679 140.532ZM169.231 144.171C167.051 144.53 164.993 143.055 164.633 140.875C164.274 138.695 165.749 136.637 167.929 136.277L169.231 144.171ZM169.968 135.949C172.15 135.607 174.197 137.099 174.539 139.281C174.881 141.464 173.39 143.511 171.207 143.853L169.968 135.949ZM191.123 141.454C188.922 141.648 186.981 140.021 186.787 137.82C186.593 135.62 188.22 133.679 190.42 133.485L191.123 141.454ZM192.471 133.31C194.672 133.128 196.605 134.765 196.786 136.967C196.968 139.169 195.331 141.101 193.129 141.282L192.471 133.31ZM213.257 140.097C211.049 140.183 209.19 138.463 209.104 136.256C209.018 134.048 210.738 132.189 212.945 132.103L213.257 140.097ZM214.986 132.027C217.194 131.948 219.048 133.674 219.127 135.881C219.206 138.089 217.48 139.943 215.272 140.022L214.986 132.027ZM235.52 139.536C233.312 139.571 231.493 137.808 231.458 135.599C231.424 133.39 233.187 131.572 235.395 131.537L235.52 139.536ZM237.433 131.506C239.642 131.474 241.459 133.238 241.491 135.447C241.524 137.656 239.76 139.473 237.551 139.505L237.433 131.506ZM257.893 139.223C255.684 139.259 253.864 137.497 253.829 135.288C253.793 133.08 255.555 131.26 257.764 131.225L257.893 139.223ZM259.797 131.191C262.006 131.152 263.828 132.912 263.866 135.121C263.904 137.33 262.144 139.151 259.936 139.189L259.797 131.191ZM280.347 138.65C278.139 138.735 276.281 137.014 276.196 134.807C276.111 132.599 277.832 130.741 280.04 130.656L280.347 138.65ZM282.055 130.576C284.263 130.484 286.126 132.199 286.217 134.407C286.309 136.614 284.594 138.477 282.387 138.569L282.055 130.576ZM302.839 137.348C300.637 137.525 298.708 135.884 298.531 133.682C298.354 131.48 299.995 129.551 302.197 129.374L302.839 137.348ZM304.204 129.207C306.406 129.019 308.342 130.652 308.53 132.853C308.717 135.054 307.085 136.991 304.884 137.178L304.204 129.207ZM325.307 134.897C323.119 135.204 321.097 133.68 320.789 131.492C320.482 129.305 322.007 127.282 324.194 126.975L325.307 134.897ZM326.187 126.689C328.373 126.368 330.405 127.88 330.725 130.066C331.046 132.251 329.534 134.283 327.348 134.604L326.187 126.689ZM347.619 130.95C345.46 131.416 343.331 130.043 342.865 127.884C342.399 125.725 343.772 123.596 345.931 123.13L347.619 130.95ZM347.9 122.697C350.055 122.216 352.194 123.573 352.676 125.729C353.157 127.885 351.8 130.023 349.644 130.505L347.9 122.697ZM369.593 125.259C367.48 125.902 365.245 124.71 364.602 122.597C363.959 120.483 365.151 118.249 367.264 117.606L369.593 125.259ZM369.181 117.014C371.289 116.355 373.533 117.529 374.193 119.637C374.853 121.746 373.678 123.99 371.57 124.649L369.181 117.014ZM391.015 117.708C388.966 118.533 386.636 117.541 385.811 115.491C384.986 113.442 385.978 111.112 388.027 110.287L391.015 117.708ZM389.837 109.549C391.878 108.706 394.218 109.677 395.061 111.718C395.905 113.76 394.934 116.099 392.892 116.943L389.837 109.549ZM410.603 108.595C408.651 109.629 406.23 108.885 405.196 106.933C404.162 104.981 404.906 102.56 406.858 101.525L410.603 108.595ZM408.517 100.637C410.46 99.5857 412.887 100.308 413.939 102.251C414.99 104.194 414.268 106.621 412.325 107.673L408.517 100.637ZM429.095 97.6509C427.246 98.8607 424.767 98.3431 423.557 96.4947C422.347 94.6463 422.865 92.1671 424.713 90.9572L429.095 97.6509ZM426.289 89.917C428.128 88.6928 430.611 89.1912 431.835 91.0301C433.06 92.869 432.561 95.3522 430.722 96.5763L426.289 89.917ZM446.535 85.1779C444.791 86.533 442.278 86.2173 440.923 84.4726C439.567 82.7279 439.883 80.215 441.628 78.8599L446.535 85.1779ZM443.12 77.6924C444.856 76.3254 447.371 76.6239 448.738 78.3593C450.105 80.0946 449.806 82.6096 448.071 83.9767L443.12 77.6924ZM462.953 71.4397C461.309 72.9158 458.78 72.7801 457.304 71.1366C455.828 69.4931 455.964 66.964 457.607 65.4879L462.953 71.4397ZM459.016 64.2149C460.65 62.7287 463.18 62.849 464.666 64.4835C466.152 66.118 466.032 68.6478 464.398 70.1339L459.016 64.2149ZM478.388 56.6389C476.843 58.2176 474.31 58.2446 472.731 56.6993C471.153 55.1539 471.126 52.6214 472.671 51.0427L478.388 56.6389ZM473.989 49.6888C475.526 48.1016 478.058 48.0605 479.645 49.5971C481.232 51.1336 481.273 53.6659 479.737 55.2532L473.989 49.6888ZM492.85 40.9482C491.401 42.6162 488.875 42.7941 487.207 41.3456C485.539 39.8972 485.361 37.3707 486.809 35.7028L492.85 40.9482ZM488.067 34.2461C489.507 32.5703 492.032 32.3788 493.708 33.8183C495.384 35.2577 495.575 37.7832 494.136 39.4589L488.067 34.2461ZM506.393 24.3923C505.046 26.1434 502.534 26.471 500.783 25.1241C499.032 23.7771 498.705 21.2658 500.052 19.5147L506.393 24.3923ZM501.197 18.0169C502.534 16.2583 505.044 15.9166 506.802 17.2536C508.561 18.5907 508.902 21.1002 507.565 22.8588L501.197 18.0169ZM518.856 6.95901C517.656 8.81384 515.179 9.3447 513.325 8.14473C511.47 6.94476 510.939 4.46836 512.139 2.61353L518.856 6.95901ZM4 313C0.0504656 312.367 0.0504777 312.367 0.0504901 312.366C0.0504945 312.366 0.050507 312.366 0.0505158 312.366C0.0505332 312.366 0.0505515 312.366 0.0505705 312.366C0.0506086 312.366 0.0506497 312.365 0.0506939 312.365C0.0507823 312.365 0.050883 312.364 0.050996 312.363C0.0512221 312.362 0.0514975 312.36 0.0518225 312.358C0.0524725 312.354 0.0533208 312.349 0.0543694 312.342C0.0564667 312.33 0.0593652 312.312 0.0630811 312.289C0.0705127 312.245 0.0812136 312.181 0.0953112 312.098C0.123506 311.932 0.16529 311.692 0.221684 311.381L8.09364 312.807C8.04223 313.091 8.00518 313.304 7.98149 313.442C7.96965 313.512 7.96115 313.563 7.95587 313.595C7.95322 313.611 7.95139 313.622 7.95034 313.628C7.94981 313.632 7.94948 313.634 7.94935 313.635C7.94928 313.635 7.94927 313.635 7.9493 313.635C7.94931 313.635 7.94934 313.635 7.94938 313.634C7.9494 313.634 7.94942 313.634 7.94945 313.634C7.94946 313.634 7.94947 313.634 7.94949 313.634C7.9495 313.634 7.94951 313.634 7.94951 313.634C7.94952 313.633 7.94953 313.633 4 313ZM4.70197 292.604C4.87257 292.002 5.04864 291.389 5.23031 290.765L12.9113 293.002C12.7351 293.607 12.5644 294.201 12.399 294.785L4.70197 292.604ZM11.2487 272.524C11.4716 271.92 11.6985 271.311 11.9295 270.699L19.4151 273.521C19.1908 274.116 18.9705 274.707 18.754 275.293L11.2487 272.524ZM19.3235 252.995C19.5896 252.417 19.859 251.837 20.1318 251.255L27.3748 254.652C27.1102 255.216 26.849 255.778 26.5911 256.339L19.3235 252.995ZM28.9442 234.164C29.2601 233.606 29.5793 233.046 29.9018 232.486L36.8341 236.479C36.5223 237.02 36.2137 237.561 35.9081 238.102L28.9442 234.164ZM40.1885 216.215C40.555 215.686 40.9246 215.158 41.2975 214.63L47.8316 219.246C47.4724 219.754 47.1162 220.263 46.7631 220.773L40.1885 216.215ZM53.1304 199.403C53.5486 198.914 53.9698 198.426 54.3943 197.94L60.4228 203.199C60.0155 203.665 59.6112 204.134 59.2099 204.603L53.1304 199.403ZM67.8144 184.032C68.2838 183.593 68.7563 183.156 69.2319 182.721L74.6326 188.623C74.1779 189.039 73.7262 189.457 73.2773 189.876L67.8144 184.032ZM84.2055 170.446C84.4676 170.254 84.7306 170.063 84.9943 169.872L89.6792 176.357C89.4277 176.539 89.177 176.721 88.9271 176.904L84.2055 170.446ZM84.9943 169.872C85.2795 169.666 85.5649 169.461 85.8503 169.258L90.4999 175.768C90.2263 175.963 89.9527 176.16 89.6792 176.357L84.9943 169.872ZM103.391 158.137C104.002 157.796 104.614 157.459 105.227 157.127L109.042 164.159C108.457 164.476 107.872 164.798 107.287 165.124L103.391 158.137ZM124.03 148.283C124.674 148.024 125.318 147.769 125.963 147.518L128.864 154.974C128.247 155.214 127.631 155.457 127.015 155.705L124.03 148.283ZM145.68 141.061C146.346 140.881 147.012 140.705 147.679 140.532L149.687 148.276C149.046 148.442 148.406 148.611 147.765 148.784L145.68 141.061ZM167.929 136.277C168.608 136.165 169.288 136.056 169.968 135.949L171.207 143.853C170.548 143.956 169.889 144.062 169.231 144.171L167.929 136.277ZM190.42 133.485C191.104 133.424 191.787 133.366 192.471 133.31L193.129 141.282C192.46 141.338 191.791 141.395 191.123 141.454L190.42 133.485ZM212.945 132.103C213.625 132.077 214.306 132.051 214.986 132.027L215.272 140.022C214.6 140.046 213.928 140.071 213.257 140.097L212.945 132.103ZM235.395 131.537C236.074 131.526 236.754 131.516 237.433 131.506L237.551 139.505C236.873 139.515 236.197 139.525 235.52 139.536L235.395 131.537ZM257.764 131.225C258.441 131.214 259.119 131.202 259.797 131.191L259.936 139.189C259.254 139.201 258.573 139.213 257.893 139.223L257.764 131.225ZM280.04 130.656C280.711 130.63 281.383 130.603 282.055 130.576L282.387 138.569C281.706 138.597 281.026 138.624 280.347 138.65L280.04 130.656ZM302.197 129.374C302.866 129.32 303.535 129.264 304.204 129.207L304.884 137.178C304.202 137.236 303.52 137.293 302.839 137.348L302.197 129.374ZM324.194 126.975C324.858 126.882 325.522 126.786 326.187 126.689L327.348 134.604C326.667 134.704 325.987 134.802 325.307 134.897L324.194 126.975ZM345.931 123.13C346.587 122.988 347.243 122.844 347.9 122.697L349.644 130.505C348.969 130.656 348.294 130.804 347.619 130.95L345.931 123.13ZM367.264 117.606C367.903 117.411 368.542 117.214 369.181 117.014L371.57 124.649C370.91 124.855 370.252 125.059 369.593 125.259L367.264 117.606ZM388.027 110.287C388.34 110.161 388.652 110.034 388.965 109.907L391.983 117.316C391.66 117.447 391.338 117.578 391.015 117.708L388.027 110.287ZM388.965 109.907C389.256 109.789 389.547 109.669 389.837 109.549L392.892 116.943C392.59 117.068 392.287 117.192 391.983 117.316L388.965 109.907ZM406.858 101.525C407.413 101.232 407.966 100.936 408.517 100.637L412.325 107.673C411.753 107.982 411.179 108.29 410.603 108.595L406.858 101.525ZM424.713 90.9572C425.241 90.6122 425.766 90.2654 426.289 89.917L430.722 96.5763C430.182 96.9362 429.639 97.2944 429.095 97.6509L424.713 90.9572ZM441.628 78.8599C442.128 78.4717 442.625 78.0826 443.12 77.6924L448.071 83.9767C447.561 84.378 447.05 84.7785 446.535 85.1779L441.628 78.8599ZM457.607 65.4879C458.079 65.0638 458.549 64.6394 459.016 64.2149L464.398 70.1339C463.919 70.5693 463.437 71.0046 462.953 71.4397L457.607 65.4879ZM472.671 51.0427C473.114 50.5905 473.553 50.1392 473.989 49.6888L479.737 55.2532C479.291 55.7141 478.841 56.1761 478.388 56.6389L472.671 51.0427ZM486.809 35.7028C487.233 35.2143 487.653 34.7287 488.067 34.2461L494.136 39.4589C493.712 39.9523 493.283 40.4488 492.85 40.9482L486.809 35.7028ZM500.052 19.5147C500.442 19.0071 500.824 18.5077 501.197 18.0169L507.565 22.8588C507.183 23.3613 506.792 23.8727 506.393 24.3923L500.052 19.5147ZM512.139 2.61353C512.3 2.36497 512.42 2.17753 512.498 2.0544C512.537 1.99284 512.566 1.94736 512.584 1.91835C512.593 1.90384 512.6 1.89346 512.603 1.88725C512.605 1.88414 512.607 1.88207 512.607 1.88106C512.608 1.88055 512.608 1.8803 512.608 1.88032C512.608 1.88033 512.608 1.8804 512.608 1.88054C512.608 1.88061 512.608 1.8807 512.608 1.8808C512.607 1.88085 512.607 1.88091 512.607 1.88097C512.607 1.881 512.607 1.88104 512.607 1.88106C512.607 1.88111 512.607 1.88116 516 3.99999C519.393 6.11881 519.393 6.11887 519.393 6.11892C519.393 6.11894 519.393 6.11899 519.393 6.11903C519.393 6.11911 519.392 6.11919 519.392 6.11927C519.392 6.11944 519.392 6.11962 519.392 6.11983C519.392 6.12023 519.392 6.1207 519.391 6.12124C519.391 6.12231 519.39 6.12364 519.389 6.12524C519.387 6.12844 519.384 6.1327 519.381 6.13799C519.374 6.14859 519.365 6.16338 519.353 6.1823C519.329 6.22014 519.295 6.27453 519.25 6.34508C519.16 6.48617 519.029 6.69188 518.856 6.95901L512.139 2.61353Z"
        fill="#EEEEEE"
      />
    </svg>
  );
};

const MobileConnector = ({ className }: { className?: string }) => {
  return (
    <svg
      width="8"
      height="112"
      viewBox="0 0 8 112"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4V108"
        stroke="#EEEEEE"
        strokeWidth="7.072"
        strokeLinecap="round"
        strokeDasharray="1.77 17.68"
      />
    </svg>
  );
};
