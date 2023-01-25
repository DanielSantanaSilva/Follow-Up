import { IsOptional, IsString, IsInt, Min } from "class-validator";
import { CreateStoryDTO } from "./create-story-dto";

export class UpdateStoryDTO implements Partial<CreateStoryDTO> {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  impressions: number;
}
