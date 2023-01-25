import { IsNotEmpty, IsString, IsOptional, IsInt, Min } from "class-validator";
import { StoryEntity } from "../entities/story-entity";

export class CreateStoryDTO
  implements Omit<StoryEntity, "id" | "createdAt" | "updatedAt">
{
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  impressions: number;
  
}
