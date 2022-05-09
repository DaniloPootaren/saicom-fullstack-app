import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { ErrorCode } from './enum/errorCode';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  create(createAddressDto: CreateAddressDto) {
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address).then(() => address);
  }

  findAll(query: PaginateQuery): Promise<Paginated<Address>> {
    return paginate(query, this.addressRepository, {
      sortableColumns: ['country'],
      defaultSortBy: [['country', 'ASC']],
    })
  }

  findOne(id: string) {
    return this.addressRepository.findOne({ addressId: id }).then((address) => {
      if (!address) {
        throw new HttpException(
          { errorCode: ErrorCode.ADDRESS_NOT_FOUND },
          HttpStatus.BAD_REQUEST,
        );
      }
      return address;
    });
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.addressRepository.findOne({ addressId: id }).then((addr) => {
      if (!addr) {
        throw new HttpException(
          { errorCode: ErrorCode.ADDRESS_NOT_FOUND },
          HttpStatus.BAD_REQUEST,
        );
      }

      this.addressRepository.update(id, updateAddressDto);
      return { ...{ addressId: id }, ...updateAddressDto };
    });
  }
  

}
