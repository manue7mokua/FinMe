import React from 'react';
import award from '../../assets/Award.svg';
import edit from '../../assets/edit.svg';
import octicon from '../../assets/octicon.svg';
import meter from '../../assets/Meter.svg';
import ellipseBar from '../../assets/ellipseBar.svg';

const TopSection = () => {
  return (
    <div className="inline-flex flex-col h-[232px] items-start gap-2.5 relative">
      <div className="inline-flex flex-col items-start gap-5 px-6 py-5 relative flex-[0_0_auto] bg-white rounded-lg shadow-shadow-01">
        <header className="flex w-[304px] items-center justify-between pt-0 pb-3 px-0 relative flex-[0_0_auto] bg-transparent [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-gray-06">
          <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
            <div className="w-fit mt-[-1.00px] font-exbold-22-32 font-[number:var(--exbold-22-32-font-weight)] text-default-black text-[length:var(--exbold-22-32-font-size)] leading-[var(--exbold-22-32-line-height)] whitespace-nowrap relative tracking-[var(--exbold-22-32-letter-spacing)] [font-style:var(--exbold-22-32-font-style)]">
              $20,000
            </div>
            <div className="inline-flex items-start gap-2 p-2 bg-specialbg rounded relative flex-[0_0_auto]">
              <img src={edit} alt='award icon' className='!relative !w-6 !h-6' />
            </div>
          </div>
          <div className="relative w-fit font-medium-14-20 font-[number:var(--medium-14-20-font-weight)] text-secondary text-[length:var(--medium-14-20-font-size)] text-right tracking-[var(--medium-14-20-letter-spacing)] leading-[var(--medium-14-20-line-height)] whitespace-nowrap [font-style:var(--medium-14-20-font-style)]">
            May, 2023
          </div>
        </header>
        <div className="inline-flex h-32 items-start gap-4 relative">
          <div className="inline-flex flex-col h-[124px] items-start justify-center gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
            <img src={award} alt='award icon' className='!relative !w-6 !h-6' />
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-[116px] mt-[-1.00px] font-regular-12-16 font-[number:var(--regular-12-16-font-weight)] text-gray-02 text-[length:var(--regular-12-16-font-size)] tracking-[var(--regular-12-16-letter-spacing)] leading-[var(--regular-12-16-line-height)] [font-style:var(--regular-12-16-font-style)]">
                  Current Progress
                </div>
                <div className="w-28 font-bold-16-24 font-[number:var(--bold-16-24-font-weight)] text-default-black text-[length:var(--bold-16-24-font-size)] leading-[var(--bold-16-24-line-height)] relative tracking-[var(--bold-16-24-letter-spacing)] [font-style:var(--bold-16-24-font-style)]">
                  $12,500
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
            <img src={octicon} alt='award icon' className='!relative !w-6 !h-6' />
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-[116px] mt-[-1.00px] font-regular-12-16 font-[number:var(--regular-12-16-font-weight)] text-gray-02 text-[length:var(--regular-12-16-font-size)] tracking-[var(--regular-12-16-letter-spacing)] leading-[var(--regular-12-16-line-height)] [font-style:var(--regular-12-16-font-style)]">
                  Monthly Target
                </div>
                <div className="w-28 font-bold-16-24 font-[number:var(--bold-16-24-font-weight)] text-default-black text-[length:var(--bold-16-24-font-size)] leading-[var(--bold-16-24-line-height)] relative tracking-[var(--bold-16-24-letter-spacing)] [font-style:var(--bold-16-24-font-style)]">
                  $20,000
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center gap-3.5 relative flex-[0_0_auto]">
            <div className="gap-1.5 inline-flex flex-col items-center relative flex-[0_0_auto]">
              <div className="bg-[#ffffff] inline-flex flex-col items-center relative flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Ellipse Bar" src={ellipseBar} />
                <img className="absolute w-9 h-9 top-8 left-[58px]" alt="Meter" src={meter} />
              </div>
              <div className="flex w-36 items-center justify-between relative flex-[0_0_auto]">
                <div className="w-[26px] font-medium-12-16 font-[number:var(--medium-12-16-font-weight)] text-gray-04 text-[length:var(--medium-12-16-font-size)] text-center leading-[var(--medium-12-16-line-height)] relative tracking-[var(--medium-12-16-letter-spacing)] [font-style:var(--medium-12-16-font-style)]">
                  $0
                </div>
                <div className="relative w-[30px] mt-[-1.00px] font-semibold-16-24 font-[number:var(--semibold-16-24-font-weight)] text-default-black text-[length:var(--semibold-16-24-font-size)] text-center tracking-[var(--semibold-16-24-letter-spacing)] leading-[var(--semibold-16-24-line-height)] [font-style:var(--semibold-16-24-font-style)]">
                  12K
                </div>
                <div className="relative w-8 font-medium-12-16 font-[number:var(--medium-12-16-font-weight)] text-gray-04 text-[length:var(--medium-12-16-font-size)] text-right tracking-[var(--medium-12-16-letter-spacing)] leading-[var(--medium-12-16-line-height)] [font-style:var(--medium-12-16-font-style)]">
                  $20k
                </div>
              </div>
            </div>
            <div className="relative w-fit font-medium-12-16 font-[number:var(--medium-12-16-font-weight)] text-default-black text-[length:var(--medium-12-16-font-size)] tracking-[var(--medium-12-16-letter-spacing)] leading-[var(--medium-12-16-line-height)] whitespace-nowrap [font-style:var(--medium-12-16-font-style)]">
              Target vs Achievement
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection;
