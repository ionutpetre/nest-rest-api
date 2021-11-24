import { Logger } from '@nestjs/common';

export class ResourceService {
  private readonly logger = new Logger(ResourceService.name);

  private name: string;
  private items = [];

  constructor(name: string) {
    this.logger.log(`Initializing ${name} resource`);
    this.name = name;
    this.items = [];
  }

  private generateId(): string {
    return Date.now().toString();
  }

  public addOne(item) {
    this.logger.log(`Add ${this.name}: ${JSON.stringify(item)}`);
    const newItem = { ...item, id: this.generateId() };
    this.items.push(newItem);
    return newItem;
  }

  public getAll() {
    this.logger.log(`Get ${this.name}s: ${JSON.stringify(this.items)}`);
    return this.items;
  }

  public getOne(id: string) {
    this.logger.log(`Get ${this.name} by id: ${id}`);
    return this.items.find((item) => item.id === id);
  }

  public updateOne(id: string, item) {
    this.logger.log(`Update ${this.name} by id: ${id}`);
    const itemIndex = this.items.findIndex((item) => item.id === id);
    this.items[itemIndex] = item;
    return item;
  }

  public deleteOne(id): void {
    this.logger.log(`Delete ${this.name} by id: ${id}`);
    this.items = this.items.filter((item) => item.id !== id);
  }
}
