import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              {index !== 0 && <HorizontalDivider />}
              <SecondaryStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              {index !== 0 && <HorizontalDivider />}
              <OpinionStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: fr 3fr 3fr;
    gap: 32px;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "advertisement advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const HorizontalDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid var(--color-gray-300);

  margin-block: 16px;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    & ${StoryList} {
      display: flex;
      flex-direction: row;
      gap: 32px;

      & > * {
        flex: 1 1 0;
      }
    }

    & ${HorizontalDivider} {
      display: none;
    }
  }
`;

export default MainStoryGrid;
