import {Pagination} from '../types/Pagination';
import {Story} from '../types/Story';
import {getPaginatedElements} from '../utils';
import {End_Points} from './Constants';
import {httpClient} from './HttpClient';

const storyHandler = async (
  listIds: number[],
  p: Pagination,
): Promise<Story[]> => {
  const ids: number[] = getPaginatedElements(listIds, p.page, p.limit);
  const stories = await Promise.all(ids.map(id => getStoryById(id)));

  return stories.map(story => story.data);
};

export const getTopStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.topStories);

  return storyHandler(res.data, p);
};

export const getBestStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.bestStories);

  return storyHandler(res.data, p);
};

export const getNewStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.newStories);

  return storyHandler(res.data, p);
};

export const getStoryById = async (id: number) => {
  return httpClient.get(`item/${id}.json`);
};
