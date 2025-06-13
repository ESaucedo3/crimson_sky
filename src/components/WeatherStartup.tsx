import { useState } from 'react';
import '../assets/weather_startup_design.css'
import { WeatherChoice } from '../models/WeatherChoice';

interface WeatherStartupProp {
  onWeatherOptionSelect: (weatherOptionDecision: WeatherChoice) => void;
}

const WeatherStartup = ({ onWeatherOptionSelect }: WeatherStartupProp) => {
  const [fade, setFade] = useState<string>('fade-in');
  const [currentWeatherBtnDisabled, setCurrentWeatherBtnDisabled] = useState<boolean>(false);
  const [searchWeatherBtnDisabled, setSearchWeatherBtnDisabled] = useState<boolean>(false);
  const [currentWeatherBtnDisabledMsg, setCurrentWeatherBtnDisabledMsg] = useState<string>('View Current Weather');

  const viewCurrentWeatherHandler = () => {
    if (!("geolocation" in navigator)) {
      setCurrentWeatherBtnDisabled(prev => !prev);
      setCurrentWeatherBtnDisabledMsg('Device Unsupported');
      return;
    }

    setCurrentWeatherBtnDisabled(prev => !prev);
    setSearchWeatherBtnDisabled(prev => !prev);

    navigator.geolocation.getCurrentPosition(position => {
      setFade('fade-out');
      setTimeout(() => onWeatherOptionSelect({ option: 'View Current Weather', location: position.coords }), 2500);
    },
    (e: GeolocationPositionError) => {
      setSearchWeatherBtnDisabled(prev => !prev);
      setCurrentWeatherBtnDisabled(prev => !prev);
      setCurrentWeatherBtnDisabledMsg('Permission Not Granted');
      if (e.PERMISSION_DENIED) console.error(e.message, e.PERMISSION_DENIED);
      else if (e.POSITION_UNAVAILABLE) console.error(e.message);
      else if (e.TIMEOUT) console.error(e.message);
      else console.error(e.message);
    },
    {
      timeout: 6000,
    })
  }

  const searchDifferentWeather = () => {
    setFade('fade-out');
    setTimeout(() => onWeatherOptionSelect({ option: 'Search Weather' }), 2500);
  }

  return (
    <section className="absolute inset-[0] z-[1] grid place-content-center">
      <div className={`p-3 ${fade}`}>
        <svg className='crimson-sky-logo w-[75%] md:w-full' width={600} height={600} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMid meet'>
          <ellipse className='base' cx="297.642" cy="300.898" rx="265.226" ry="269.73" fill="#221430"/>
          <path className='star' d="M92.5585 79.1212C92.8887 83.5565 96.5645 87.1835 101.375 88.0469C96.5174 88.9188 92.8168 92.6086 92.5498 97.1031C92.5444 97.1031 92.5391 97.103 92.5338 97.103C92.5287 97.103 92.5236 97.1031 92.5185 97.1031C92.2515 92.6086 88.5511 88.9188 83.6934 88.0469C88.504 87.1835 92.1796 83.5565 92.5098 79.1212C92.5179 79.1212 92.5261 79.1211 92.5342 79.1211C92.5423 79.1211 92.5504 79.1212 92.5585 79.1212Z" fill="#FBE1B7"/>
          <path className='star' d="M44.8261 154.047C45.2663 159.961 50.1674 164.797 56.5815 165.948C50.1045 167.11 45.1704 172.03 44.8144 178.023C44.8073 178.023 44.8002 178.023 44.7931 178.023C44.7863 178.023 44.7795 178.023 44.7728 178.023C44.4168 172.03 39.4828 167.11 33.0059 165.948C39.42 164.797 44.3208 159.961 44.7611 154.047C44.7719 154.047 44.7828 154.047 44.7937 154.047C44.8045 154.047 44.8153 154.047 44.8261 154.047Z" fill="#FBE1B7"/>
          <path className='star' d="M457.989 540.659C458.429 546.573 463.33 551.409 469.745 552.56C463.268 553.723 458.333 558.643 457.977 564.635C457.97 564.635 457.963 564.635 457.956 564.635C457.949 564.635 457.943 564.635 457.936 564.635C457.58 558.643 452.646 553.723 446.169 552.56C452.583 551.409 457.484 546.573 457.924 540.659C457.935 540.659 457.946 540.659 457.957 540.659C457.968 540.659 457.978 540.659 457.989 540.659Z" fill="#FBE1B7"/>
          <path className='star' d="M531.065 113.287C531.396 117.722 535.071 121.349 539.882 122.213C535.024 123.085 531.324 126.775 531.057 131.269C531.051 131.269 531.046 131.269 531.041 131.269C531.036 131.269 531.03 131.269 531.025 131.269C530.758 126.775 527.058 123.085 522.2 122.213C527.011 121.349 530.686 117.722 531.017 113.287C531.025 113.287 531.033 113.287 531.041 113.287C531.049 113.287 531.057 113.287 531.065 113.287Z" fill="#FBE1B7"/>
          <path className='star' d="M585.298 332.668C585.738 338.582 590.639 343.418 597.053 344.569C590.576 345.732 585.642 350.651 585.286 356.644C585.279 356.644 585.272 356.644 585.265 356.644C585.258 356.644 585.251 356.644 585.244 356.644C584.888 350.651 579.954 345.732 573.478 344.569C579.892 343.418 584.793 338.582 585.233 332.668C585.244 332.668 585.254 332.668 585.265 332.668C585.276 332.668 585.287 332.668 585.298 332.668Z" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="121.12" cy="66.2329" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="144.695" cy="49.4516" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="199.509" cy="29.6704" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="266.699" cy="16.4829" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="291.454" cy="1.4985" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="330.943" cy="16.4829" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="564.342" cy="171.129" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="579.666" cy="223.277" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="572.004" cy="389.311" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="497.151" cy="520.58" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="404.027" cy="566.133" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="336.542" cy="597.003" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="256.091" cy="594.305" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="215.128" cy="585.015" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="80.1569" cy="510.09" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="50.6877" cy="478.321" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="37.4266" cy="450.45" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="2.06287" cy="328.772" rx="2.06287" ry="2.0979" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="8.84051" cy="384.815" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="17.6818" cy="222.977" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="4.42074" cy="274.825" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="22.6912" cy="424.675" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="158.841" cy="563.137" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="105.206" cy="530.769" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="138.507" cy="554.446" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="591.159" cy="282.317" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="576.719" cy="441.458" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="535.461" cy="485.814" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="597.053" cy="198.401" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="374.853" cy="23.9764" rx="5.89391" ry="5.99401" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="452.063" cy="51.5487" rx="5.89391" ry="5.99401" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="510.708" cy="76.4232" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <ellipse className='tiny-star' cx="40.3736" cy="118.382" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <path d="M297.642 558.641C230.426 558.641 165.964 531.486 118.435 483.15C70.9058 434.814 44.2044 369.256 44.2043 300.899C44.2043 232.541 70.9058 166.983 118.435 118.647C165.963 70.3112 230.426 43.1563 297.642 43.1563L297.642 300.898V558.641Z" fill="url(#paint0_linear_2059_643)"/>
          <g filter="url(#filter0_ii_2059_643)">
          <path d="M152.892 448.908C140.473 419.107 110.163 435.772 94.4993 449.563C93.3586 450.567 93.2135 452.27 94.1156 453.493L105.795 469.33L124.951 489.71L142.043 504.395L165.913 521.178L190.373 534.365L220.137 546.054L254.617 554.745L276.129 557.442L294.559 557.956C296.248 558.003 297.642 556.646 297.642 554.957V488.418C297.642 487.89 297.498 487.357 297.221 486.908C280.68 460.092 232.735 480.316 207.277 496.911C205.231 498.245 202.456 496.805 202.456 494.363V493.542C202.456 493.188 202.525 492.838 202.623 492.497C204.149 487.179 197.33 486.017 193.615 486.114H172.688C172.047 486.114 172.407 485.891 172.917 485.503C200.192 464.706 173.624 449.521 156.392 450.991C154.908 451.117 153.465 450.283 152.892 448.908Z" fill="#F7FDED"/>
          </g>
          <path d="M152.892 448.908C140.473 419.107 110.163 435.772 94.4993 449.563C93.3586 450.567 93.2135 452.27 94.1156 453.493L105.795 469.33L124.951 489.71L142.043 504.395L165.913 521.178L190.373 534.365L220.137 546.054L254.617 554.745L276.129 557.442L294.559 557.956C296.248 558.003 297.642 556.646 297.642 554.957V488.418C297.642 487.89 297.498 487.357 297.221 486.908C280.68 460.092 232.735 480.316 207.277 496.911C205.231 498.245 202.456 496.805 202.456 494.363V493.542C202.456 493.188 202.525 492.838 202.623 492.497C204.149 487.179 197.33 486.017 193.615 486.114H172.688C172.047 486.114 172.407 485.891 172.917 485.503C200.192 464.706 173.624 449.521 156.392 450.991C154.908 451.117 153.465 450.283 152.892 448.908Z" stroke="white" strokeWidth="3" strokeLinejoin="bevel"/>
          <ellipse cx="103.733" cy="251.149" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="114.636" cy="238.261" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <ellipse cx="118.173" cy="377.323" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse cx="138.507" cy="420.18" rx="5.89391" ry="5.99401" fill="#FBE1B7"/>
          <ellipse cx="96.9546" cy="409.691" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <ellipse cx="266.7" cy="524.775" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <g filter="url(#filter1_i_2059_643)">
          <path d="M298.821 461.538C259.742 461.538 222.264 445.759 194.631 417.673C166.998 389.586 151.474 351.493 151.474 311.772C151.474 272.052 166.998 233.958 194.631 205.871C222.264 177.785 259.153 162.438 298.232 162.438L298.821 311.772V461.538Z" fill="#FCFEF1"/>
          </g>
          <path d="M297.642 43.1571C364.858 43.1571 429.321 70.312 476.85 118.648C524.379 166.984 551.08 232.542 551.08 300.899C551.08 369.257 524.379 434.815 476.85 483.151C429.321 531.487 364.858 558.642 297.642 558.642L297.642 300.899V43.1571Z" fill="#221433"/>
          <ellipse cx="317.976" cy="389.311" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse cx="326.817" cy="305.395" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse cx="387.819" cy="282.317" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="388.114" cy="328.171" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <ellipse cx="385.167" cy="234.066" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse cx="360.118" cy="199.601" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="321.807" cy="83.915" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="399.018" cy="94.1064" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="373.379" cy="85.4145" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse cx="329.764" cy="180.719" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <path d="M336.607 218.782C337.488 230.609 347.29 240.281 360.118 242.583C347.164 244.908 337.296 254.748 336.584 266.733C336.57 266.733 336.555 266.733 336.541 266.733C336.528 266.733 336.514 266.733 336.501 266.733C335.789 254.748 325.921 244.908 312.967 242.583C325.795 240.281 335.597 230.609 336.477 218.782C336.499 218.782 336.521 218.781 336.542 218.781C336.564 218.781 336.586 218.782 336.607 218.782Z" fill="#FBE1B7"/>
          <path d="M360.143 294.905C360.473 299.341 364.148 302.968 368.959 303.831C364.101 304.703 360.401 308.393 360.134 312.887C360.128 312.887 360.123 312.887 360.118 312.887C360.113 312.887 360.108 312.887 360.103 312.887C359.836 308.393 356.135 304.703 351.277 303.831C356.088 302.968 359.764 299.341 360.094 294.905C360.102 294.905 360.11 294.905 360.118 294.905C360.126 294.905 360.134 294.905 360.143 294.905Z" fill="#FBE1B7"/>
          <path d="M336.583 350.05C337.133 357.442 343.26 363.487 351.277 364.926C343.181 366.379 337.013 372.529 336.568 380.02C336.559 380.02 336.551 380.02 336.542 380.02C336.533 380.02 336.525 380.02 336.516 380.02C336.071 372.529 329.904 366.379 321.808 364.926C329.825 363.487 335.951 357.442 336.502 350.05C336.515 350.05 336.529 350.05 336.542 350.05C336.556 350.05 336.569 350.05 336.583 350.05Z" fill="#FBE1B7"/>
          <g filter="url(#filter2_ii_2059_643)">
          <path d="M440.818 447.762C452.868 417.805 483.381 434.081 499.214 447.67C500.367 448.66 500.533 450.361 499.646 451.595L488.163 467.581L469.261 488.203L452.351 503.106L428.69 520.192L404.395 533.691L374.777 545.758L340.408 554.889L318.93 557.861L300.509 558.609C298.821 558.678 297.409 557.34 297.388 555.65L296.567 489.116C296.56 488.589 296.698 488.054 296.969 487.601C313.178 460.576 361.369 480.187 387.03 496.456C389.092 497.763 391.85 496.287 391.82 493.846L391.809 493.025C391.805 492.671 391.731 492.321 391.629 491.982C390.037 486.684 396.842 485.435 400.558 485.484L421.483 485.217C422.124 485.209 421.761 484.991 421.247 484.609C393.717 464.163 420.096 448.639 437.344 449.889C438.829 449.996 440.262 449.144 440.818 447.762Z" fill="#F7FDED"/>
          </g>
          <path d="M440.818 447.762C452.868 417.805 483.381 434.081 499.214 447.67C500.367 448.66 500.533 450.361 499.646 451.595L488.163 467.581L469.261 488.203L452.351 503.106L428.69 520.192L404.395 533.691L374.777 545.758L340.408 554.889L318.93 557.861L300.509 558.609C298.821 558.678 297.409 557.34 297.388 555.65L296.567 489.116C296.56 488.589 296.698 488.054 296.969 487.601C313.178 460.576 361.369 480.187 387.03 496.456C389.092 497.763 391.85 496.287 391.82 493.846L391.809 493.025C391.805 492.671 391.731 492.321 391.629 491.982C390.037 486.684 396.842 485.435 400.558 485.484L421.483 485.217C422.124 485.209 421.761 484.991 421.247 484.609C393.717 464.163 420.096 448.639 437.344 449.889C438.829 449.996 440.262 449.144 440.818 447.762Z" stroke="white" strokeWidth="3" strokeLinejoin="bevel"/>
          <ellipse cx="18.8929" cy="13.4599" rx="18.8929" ry="13.4599" transform="matrix(0.94687 -0.321615 0.312016 0.950077 307.32 420.507)" fill="#FBE1B7"/>
          <ellipse cx="348.33" cy="418.981" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="360.118" cy="408.491" rx="14.7348" ry="11.6883" fill="#FBE1B7"/>
          <ellipse cx="395.187" cy="392.608" rx="35.0688" ry="21.5784" fill="#FBE1B7"/>
          <g filter="url(#filter3_i_2059_643)">
          <path d="M355.081 107.566C457.015 118.734 531.168 207.833 520.708 306.574C517.427 337.541 506.214 365.779 489.222 389.609C469.287 417.564 441.4 439.454 409.038 452.568C381.027 463.918 349.662 468.694 317.201 465.137C299.935 463.245 283.466 459.115 268.07 453.083C348.025 440.534 412.354 377.668 421.042 295.656C429.731 213.641 380.042 138.279 304.546 108.701C320.854 106.142 337.813 105.674 355.081 107.566Z" fill="#EB3547" fillOpacity="0.99"/>
          </g>
          <rect x="406.68" y="447.752" width="104.322" height="8.99101" rx="4.4955" fill="#1D1533"/>
          <rect x="477.996" y="392.607" width="57.7603" height="8.99101" rx="4.4955" fill="#1D1533"/>
          <rect x="411.984" y="481.318" width="70.1375" height="8.99101" rx="4.4955" fill="#1D1533"/>
          <rect x="434.971" y="418.98" width="80.1572" height="8.39161" rx="4.1958" fill="#1D1533"/>
          <g filter="url(#filter4_i_2059_643)">
          <path d="M297.643 57.2441L297.644 162.138L280.256 163.337L260.511 166.933L249.902 170.23L238.998 174.726L224.263 182.218L217.485 186.414L203.34 197.203L192.436 207.693L179.764 223.277L103.733 155.545L130.845 124.676L160.314 101.898L205.403 75.8244L250.786 60.8394L297.643 57.2441Z" fill="#FD724D"/>
          <path d="M297.643 57.2441L297.644 162.138L280.256 163.337L260.511 166.933L249.902 170.23L238.998 174.726L224.263 182.218L217.485 186.414L203.34 197.203L192.436 207.693L179.764 223.277L103.733 155.545L130.845 124.676L160.314 101.898L205.403 75.8244L250.786 60.8394L297.643 57.2441Z" fill="url(#paint1_linear_2059_643)" fillOpacity="0.2"/>
          </g>
          <path d="M297.643 57.2441L297.644 162.138L280.256 163.337L260.511 166.933L249.902 170.23L238.998 174.726L224.263 182.218L217.485 186.414L203.34 197.203L192.436 207.693L179.764 223.277L103.733 155.545L130.845 124.676L160.314 101.898L205.403 75.8244L250.786 60.8394L297.643 57.2441Z" stroke="#FD724D"/>
          <ellipse cx="234.578" cy="116.884" rx="2.94695" ry="2.997" fill="#FBE1B7"/>
          <ellipse cx="282.613" cy="121.377" rx="1.47348" ry="1.4985" fill="#FBE1B7"/>
          <ellipse cx="229.568" cy="137.562" rx="4.42043" ry="4.4955" fill="#FBE1B7"/>
          <path d="M263.298 137.508L263.983 134.485L265.301 131.27L266.452 136.543L271.043 160.638C271.139 161.146 270.837 161.648 270.345 161.798L267.895 162.544C267.312 162.721 266.713 162.335 266.63 161.728L263.298 137.508Z" fill="#F9FAE9"/>
          <path d="M122.392 307.548L119.584 306.337L116.699 304.46L122.005 304.222L146.134 303.809C146.645 303.8 147.077 304.18 147.135 304.689L147.434 307.293C147.505 307.905 147.013 308.439 146.4 308.416L122.392 307.548Z" fill="#F9FAE9"/>
          <path d="M205.762 452.498L203.48 453.138L200.614 453.475L202.849 450.983L213.447 440.105C213.751 439.793 214.223 439.718 214.612 439.92L216.732 441.026C217.359 441.353 217.467 442.212 216.939 442.677L205.762 452.498Z" fill="#F9FAE9"/>
          <path d="M173.029 181.183L171.469 178.063L170.334 174.426L175.149 178.601L196.634 198.113C197.034 198.477 197.08 199.094 196.738 199.509L195.057 201.548C194.687 201.997 194.015 202.028 193.599 201.615L173.029 181.183Z" fill="#F9FAE9"/>
          <path d="M211.302 157.607L210.929 154.529L211.086 151.049L213.941 155.603L226.358 176.648C226.62 177.093 226.509 177.667 226.1 177.976L224.041 179.535C223.554 179.903 222.858 179.744 222.573 179.198L211.302 157.607Z" fill="#F9FAE9"/>
          <path d="M151.627 189.41C151.939 184.266 149.36 177.534 137.525 179.78C135.253 180.211 134.645 183.039 136.373 184.574L158.717 204.429C160.375 205.902 162.991 204.655 162.896 202.438C162.867 201.765 162.569 201.133 162.069 200.683L152.671 192.214C151.893 191.512 151.563 190.456 151.627 189.41Z" fill="#F9FAE9" stroke="white"/>
          <rect x="80.1572" y="194.205" width="47.1513" height="8.99101" rx="4.4955" fill="#1D1533"/>
          <path d="M44.7939 335.064H187.646C190.129 335.064 192.142 337.077 192.142 339.56V339.56C192.142 342.043 190.129 344.055 187.646 344.055H44.7939V335.064Z" fill="#1D1533"/>
          <path d="M44.7939 349.451H63.8741C66.3569 349.451 68.3696 351.464 68.3696 353.947V353.947C68.3696 356.429 66.3569 358.442 63.8741 358.442H44.7939V349.451Z" fill="#1D1533"/>
          <path d="M96.3699 306.318C79.5618 293.079 71.0804 309.76 72.7898 305.994C75.6997 299.582 72.0988 293.848 64.5384 290.709C60.7091 289.119 54.2744 289.416 46.6152 290.358C45.0804 290.547 43.9567 291.886 44.0031 293.432C44.2347 301.145 44.3187 311.559 44.7938 320.08C45.0923 325.435 45.4755 330.157 45.7226 332.962C45.8577 334.498 47.146 335.664 48.687 335.664H177.112C183.595 335.664 183.006 324.276 177.112 324.276H151.055C150.746 324.276 150.44 324.228 150.146 324.135L125.074 316.167C123.528 315.675 122.755 313.885 121.959 312.472C119.287 307.73 106.331 305.52 100.252 306.959C98.9347 307.271 97.4337 307.156 96.3699 306.318Z" fill="url(#paint2_radial_2059_643)"/>
          <defs>
          <filter id="filter0_ii_2059_643" x="92.0291" y="430.785" width="227.113" height="165.672" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="20" dy="133"/>
          <feGaussianBlur stdDeviation="18.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.878431 0 0 0 0 0.180392 0 0 0 0 0.290196 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2059_643"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="35"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.976471 0 0 0 0 0.882353 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_2059_643" result="effect2_innerShadow_2059_643"/>
          </filter>
          <filter id="filter1_i_2059_643" x="151.474" y="132.438" width="147.348" height="329.101" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-80"/>
          <feGaussianBlur stdDeviation="15"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2059_643"/>
          </filter>
          <filter id="filter2_ii_2059_643" x="295.067" y="429.356" width="226.644" height="167.755" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="20" dy="133"/>
          <feGaussianBlur stdDeviation="18.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.878431 0 0 0 0 0.180392 0 0 0 0 0.290196 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2059_643"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="35"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.976471 0 0 0 0 0.882353 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow_2059_643" result="effect2_innerShadow_2059_643"/>
          </filter>
          <filter id="filter3_i_2059_643" x="268.07" y="106.41" width="270.621" height="359.883" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="35"/>
          <feGaussianBlur stdDeviation="8.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.984314 0 0 0 0 0.921569 0 0 0 0.9 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2059_643"/>
          </filter>
          <filter id="filter4_i_2059_643" x="103.03" y="9.7041" width="195.115" height="214.294" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-100"/>
          <feGaussianBlur stdDeviation="23.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.627451 0 0 0 0 0.356863 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2059_643"/>
          </filter>
          <linearGradient id="paint0_linear_2059_643" x1="297.642" y1="43.1563" x2="297.642" y2="558.641" gradientUnits="userSpaceOnUse">
          <stop offset="0.0961538" stopColor="#F7F8EA" stopOpacity="0.9"/>
          <stop offset="0.600962" stopColor="#DC143C" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="paint1_linear_2059_643" x1="194.056" y1="57.8423" x2="248.426" y2="170.72" gradientUnits="userSpaceOnUse">
          <stop offset="0.25"/>
          <stop offset="0.596154" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="paint2_radial_2059_643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53.0452 328.471) rotate(5.40427) scale(76.3709 25.5223)">
          <stop stopColor="#E0354B"/>
          <stop offset="1" stopColor="#FAFAE0"/>
          </radialGradient>
          </defs>
        </svg>
        <h1 className='crimson-sky-title text-center text-[1.6875rem] sm:text-[1.875rem] md:text-[2.0625rem] lg:text-[2.25rem] text-shadow-zinc-700'>Crimson Sky</h1>
        <div className="flex flex-col items-center w-[75%] mx-auto md:flex-row md:justify-center md:w-full">
          <button className="bg-cyan-700 rounded-full shadow-cyan-400/90 my-2 md:my-0 md:me-2.5 py-2 px-3 text-md disabled:opacity-30" type="button" disabled={fade === 'fade-out' || currentWeatherBtnDisabled} onClick={viewCurrentWeatherHandler}>{currentWeatherBtnDisabled ? currentWeatherBtnDisabledMsg : 'View Current Weather'}</button>
          <button className="bg-cyan-700 rounded-full shadow-cyan-400/90 py-2 px-3 text-md disabled:opacity-30" type="button" disabled={fade === 'fade-out' || searchWeatherBtnDisabled} onClick={searchDifferentWeather}>Search Different Weather</button>
        </div>
      </div>
    </section>
  )
}

export default WeatherStartup;