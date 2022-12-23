import { StoryInterface } from "../interfaces/interface";

export default class CreateStory {
  constructor(private storyRepository: any) {}

  async create(story: StoryInterface) {
    return await this.storyRepository.save({ ...story });
  }

  async getAll() {
    return await this.storyRepository.getAll();
  }

  async findOne(storyId: string) {
    return await this.storyRepository.findOne(storyId);
  }

  async update(storyId: string, data: Partial<StoryInterface>) {
    return await this.storyRepository.update(storyId, data);
  }

  async delete(storyId: string) {
    await this.storyRepository.delete(storyId);
  }
}
