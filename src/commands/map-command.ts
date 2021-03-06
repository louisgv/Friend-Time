import { Message } from 'discord.js';
import { ServerData } from '../models/server-data';
import { UserData } from '../models/user-data';
import { CommandName } from '../services/language/command-name';
import { MessageName } from '../services/language/message-name';
import { MessageSender } from '../services/message-sender';
import { Command } from './command';

export class MapCommand implements Command {
    public name = CommandName.map;

    constructor(private msgSender: MessageSender) {}

    public async execute(
        msg: Message,
        args: string[],
        authorData: UserData,
        serverData?: ServerData
    ): Promise<void> {
        let channel = msg.channel;

        this.msgSender.sendWithTitle(
            channel,
            authorData.LangCode,
            MessageName.mapMessage,
            MessageName.mapTitle
        );
    }
}
