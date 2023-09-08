import React from 'react';
import { useParams } from 'react-router-dom';
import CaseIntro from '../../blocks/case-intro/case-intro';
import ContactBar from '../../blocks/contact-bar/contact-bar';
import Contacts from '../../blocks/contacts/contacts';
import CaseText from '../../blocks/case-text/case-text';
import CaseGallery from '../../blocks/case-gallery/case-gallery';
import StyledCaseEnding from '../../blocks/case-ending/case-ending';

const generateCaseContent = (textBlocks, galleryBlcoks, isException) => {
  let result = [];

  if (isException) {
    result = [...textBlocks, ...galleryBlcoks];
  } else {
    textBlocks.forEach((text, index) => {
      result.push(text);

      if (galleryBlcoks[index]) {
        result.push(galleryBlcoks[index]);
      }
    });
  }

  return result;
};

const Case = ({ cases }) => {
  const params = useParams();
  const caseInfo = cases.find((caseItem) => caseItem.id === params.id);
  const contentToRender = generateCaseContent(
    caseInfo.text_blocks,
    caseInfo.gallery,
    caseInfo.is_exception,
  );
  let galleryCount = 0;
  return (
    <main>
      <CaseIntro caseInfo={caseInfo} />
      {contentToRender &&
        contentToRender.length &&
        contentToRender.map((item, index) => {
          if (item[0]) {
            galleryCount++;
            return (
              <CaseGallery
                key={index}
                content={item}
                showBackground={
                  galleryCount === 2 || caseInfo.is_exception ? true : false
                }
                isException={caseInfo.is_exception ? true : false}
              />
            );
          } else {
            return <CaseText key={index} content={item} />;
          }
        })}
      {caseInfo.ending_text ? (
        <StyledCaseEnding text={caseInfo.ending_text} />
      ) : null}
      <ContactBar title={'More details?'} />
      <Contacts links={caseInfo.links} />
    </main>
  );
};

export default Case;
